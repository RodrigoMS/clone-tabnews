import { version as uuidVersion } from "uuid";
import orchestrator from "tests/orchestrator.js";
import user from "models/user.js";
import password from "models/password.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("PATCH /api/v1/users/[username]", () => {
  describe("Anonymous user", () => {
    test("With nonexistent 'username'", async () => {
      const response2 = await fetch(
        "http://localhost:3000/api/v1/users/CaseNonexistent",
        {
          method: "PATCH",
        },
      );

      expect(response2.status).toBe(404);

      const responseBody = await response2.json();

      expect(responseBody).toEqual({
        name: "NotFoundError",
        message: "O username informado n]ao foi encontrado no sistema.",
        action: "Verifique se o username está digitado corretamente",
        status_code: 404,
      });
    });

    test("With duplicated 'username'", async () => {
      await orchestrator.createUser({
        username: "user1",
      });

      await orchestrator.createUser({
        username: "user2",
      });

      const response = await fetch("http://localhost:3000/api/v1/users/user2", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "user1",
        }),
      });

      expect(response.status).toBe(400);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "O username informado já está sendo utilizado.",
        action: "Utilize outro username para realizar esta operação.",
        status_code: 400,
      });
    });

    test("With duplicated 'email'", async () => {
      await orchestrator.createUser({
        email: "email1@localhost.com",
      });

      const createUser2 = await orchestrator.createUser({
        email: "email2@localhost.com",
      });

      const response = await fetch(
        `http://localhost:3000/api/v1/users/${createUser2.username}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "email1@localhost.com",
          }),
        },
      );

      expect(response.status).toBe(400);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "O email informado já está sendo utilizado.",
        action: "Utilize outro email para realizar esta operação.",
        status_code: 400,
      });
    });

    test("With unique 'username'", async () => {
      const uniqueUser1Response = await fetch(
        "http://localhost:3000/api/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "uniqueUser1",
            email: "uniqueUser1@localhost.com",
            password: "123456789",
          }),
        },
      );

      // Verifica se o status da resposta é 201 (OK)
      expect(uniqueUser1Response.status).toBe(201);

      const response = await fetch(
        "http://localhost:3000/api/v1/users/uniqueUser1",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "uniqueUser2",
          }),
        },
      );

      expect(response.status).toBe(200);

      const responseBody = await response.json();

      // Verifica se a resposta e igual a:
      expect(responseBody).toEqual({
        id: responseBody.id,
        username: "uniqueUser2",
        email: "uniqueUser1@localhost.com",
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      // Se não for verdadeira - Se atualizar e os dois valores de (criação e atualização)
      // estiverem iguais significa que há algo errado.
      expect(responseBody.updated_at > responseBody.created_at).toBe(true);
    });

    test("With unique 'email'", async () => {
      const uniqueUser1Response = await orchestrator.createUser({
        email: "uniqueEmail1@localhost.com",
      });

      const response = await fetch(
        `http://localhost:3000/api/v1/users/${uniqueUser1Response.username}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "uniqueEmail2@localhost.com",
          }),
        },
      );

      expect(response.status).toBe(200);

      const responseBody = await response.json();

      // Verifica se a resposta e igual a:
      expect(responseBody).toEqual({
        id: responseBody.id,
        username: uniqueUser1Response.username,
        email: "uniqueEmail2@localhost.com",
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      // Se não for verdadeira - Se atualizar e os dois valores de (criação e atualização)
      // estiverem iguais significa que há algo errado.
      expect(responseBody.updated_at > responseBody.created_at).toBe(true);
    });

    test("With new 'password'", async () => {
      // Cria um usuário com uma senha.
      const uniqueUser1Response = await orchestrator.createUser({
        password: "newPassword1",
      });

      // Atualiza o usuário recém cadastrado com uma nova senha.
      const response = await fetch(
        `http://localhost:3000/api/v1/users/${uniqueUser1Response.username}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: "newPassword2",
          }),
        },
      );

      // Verifica se o status code retornado é 200 (OK).
      expect(response.status).toBe(200);

      const responseBody = await response.json();

      // Verifica se o usuário retornado é igual ao usuário que foi
      // criado e depois atualizado.
      expect(responseBody).toEqual({
        id: responseBody.id,
        username: uniqueUser1Response.username,
        email: uniqueUser1Response.email,
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);
      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      // Se não for verdadeira - Se atualizar e os dois valores de (criação e atualização)
      // estiverem iguais significa que há algo errado.
      expect(responseBody.updated_at > responseBody.created_at).toBe(true);

      const userInDatabase = await user.findOneByUsername(
        uniqueUser1Response.username,
      );

      // Se a senha nova está correta no banco de dados.
      const correctPasswordMatch = await password.compare(
        "newPassword2",
        userInDatabase.password,
      );

      // Se a senha antiga não existe mais.
      const incorrectPasswordMatch = await password.compare(
        uniqueUser1Response.username,
        userInDatabase.password,
      );

      expect(correctPasswordMatch).toBe(true);
      expect(incorrectPasswordMatch).toBe(false);
    });
  });
});
