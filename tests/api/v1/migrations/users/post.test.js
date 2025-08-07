import { version as uuidVersion } from "uuid";
import orchestrator from "tests/orchestrator.js";
import status from "pages/api/v1/status";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/users", () => {
  describe("Anonymous user", () => {
    test("With unique and valid data", async () => {
      // Faz uma solicitação GET para o endpoint /api/v1/migrations usando o método POST.
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "rodrigoms",
          email: "rms@localhost.com",
          password: "123456789",
        }),
      });

      // Verifica se o status da resposta é 201 (OK)
      expect(response.status).toBe(201);

      const response1Body = await response.json();

      // Verifica se a resposta e igual a:
      expect(response1Body).toEqual({
        id: response1Body.id,
        username: "rodrigoms",
        email: "rms@localhost.com",
        password: "123456789",
        created_at: response1Body.created_at,
        updated_at: response1Body.updated_at,
      });

      expect(uuidVersion(response1Body.id)).toBe(4);
      expect(Date.parse(response1Body.created_at)).not.toBeNaN();
      expect(Date.parse(response1Body.updated_at)).not.toBeNaN();

      // Verifica se o array da resposta não está vazio.
      //expect(response1Body.length).toBeGreaterThan(0);
    });

    test("With duplicated 'email'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "emailduplicado1",
          email: "duplivado@localhost.com",
          password: "123456789",
        }),
      });

      // Verifica se o status da resposta é 201 (OK)
      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "emailduplicado2",
          email: "Duplivado@localhost.com",
          password: "123456789",
        }),
      });

      expect(response2.status).toBe(400);

      const response2Body = await response2.json();

      expect(response2Body).toEqual({
        name: "ValidationError",
        message: "O email informado já está sendo utilizado.",
        action: "Utilize outro email para realizar o cadastro",
        status_code: 400,
      });
    });

    test("With duplicated 'username'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "nomeduplicado",
          email: "usernomeduplivado1@localhost.com",
          password: "123456789",
        }),
      });

      // Verifica se o status da resposta é 201 (OK)
      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "NomeDuplicado",
          email: "usernomeduplivado2@localhost.com",
          password: "123456789",
        }),
      });

      expect(response2.status).toBe(400);

      const response2Body = await response2.json();

      expect(response2Body).toEqual({
        name: "ValidationError",
        message: "O username informado já está sendo utilizado.",
        action: "Utilize outro username para realizar o cadastro",
        status_code: 400,
      });
    });
  });
});
