// ---------------------------------------------------------------------- //
//                                                                        //
//                         Testes de Integração                           //
//                                                                        //
// ---------------------------------------------------------------------- //
// Arquivo: get.text.js                                                   //
// Autor: RodrigoMS                                                       //
// Data: 02/12/2024                                                       //
// Descrição: Este arquivo contém os testes de migração para o sistema.   //
// Assegura que todos os módulos funcionem corretamente em conjunto.      //
// ---------------------------------------------------------------------- //

import database from "infra/database.js";
import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  // Removendo todos os esquemas (incluindo o esquema público)
  // e, em seguida, criando um novo esquema público.
  await database.query("drop schema public cascade; create schema public;");
});

// Teste de integração para o endpoint /api/v1/status
test("GET to /api/v1/migrations", async () => {
  // Faz uma solicitação GET para o endpoint especificado
  const response = await fetch("http://localhost:3000/api/v1/migrations");

  // Verifica se o status da resposta é 200 (OK)
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
