// ---------------------------------------------------------------------- //
//                                                                        //
//                         Testes de Integração                           //
//                                                                        //
// ---------------------------------------------------------------------- //
// Arquivo: post.text.js                                                   //
// Autor: RodrigoMS                                                       //
// Data: 30/07/2025                                                      //
// Descrição: Este arquivo contém os testes de integração para o sistema. //
// Assegura que todos os módulos funcionem corretamente em conjunto.      //
// ---------------------------------------------------------------------- //

import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("POST /api/v1/status", () => {
  describe("Anonymous user", () => {
    test("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/api/v1/status", {
        method: "POST",
      });
      expect(response.status).toBe(405);

      const responseBody = await response.json();

      expect(responseBody).toEqual({
        name: "MethodNotAllowedError",
        message: "Método não permitido para este endpoint.",
        action:
          "Verifique se o método HTTP enviado é válido para este endpoint.",
        status_code: 405,
      });

      // Extrai o corpo da resposta e converte para JSON
      //const responseBody = await response.json();

      // Verifica se a propriedade 'updated_at' está definida no corpo da resposta
      //expect(responseBody.updated_at).toBeDefined();

      // Converte a data 'updated_at' para o formato ISOString
      //const parseUpdateAt = new Date(responseBody.updated_at).toISOString();

      // Verifica se a data no corpo da resposta é igual à data convertida
      //expect(responseBody.updated_at).toEqual(parseUpdateAt);

      // Verifica se a versão do PostgreSQL é a definida no projeto.
      //expect(responseBody.dependencies.database.version).toEqual("16.0");

      // Conexões máximas disponíveis pelo ambiente local.
      //expect(responseBody.dependencies.database.max_connections).toEqual(100);

      // Número de conexões usadas atual ser iguar a 1.
      //expect(responseBody.dependencies.database.opened_connections).toEqual(1);
    });
  });
});
