// ---------------------------------------------------------------------- //
//                                                                        //
//                         Testes de Integração                           //
//                                                                        //
// ---------------------------------------------------------------------- //
// Arquivo: post.text.js                                                  //
// Autor: RodrigoMS                                                       //
// Data: 02/12/2024                                                       //
// Descrição: Este arquivo contém os testes de migração para o sistema.   //
// Sobre o método POST, assegura que todos os módulos funcionem           //
// corretamente em conjunto.                                              //
// ---------------------------------------------------------------------- //

import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  // Removendo todos os esquemas (incluindo o esquema público)
  // e, em seguida, criando um novo esquema público.
  await database.query("drop schema public cascade; create schema public;");
}

// Teste de integração para o endpoint /api/v1/status
test("POST to /api/v1/migrations", async () => {
  // Faz uma solicitação GET para o endpoint /api/v1/migrations usando o método POST.
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  // Verifica se o status da resposta é 201 (OK)
  expect(response1.status).toBe(201);

  const response1Body = await response1.json();

  // Verifica de o array da requisição está vazio.
  expect(Array.isArray(response1Body)).toBe(true);

  // Verifica se o array da resposta não está vazio.
  expect(response1Body.length).toBeGreaterThan(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  expect(response2.status).toBe(200);

  const response2Body = await response2.json();

  expect(Array.isArray(response2Body)).toBe(true);

  // Espera que o array seja vazio.
  expect(response2Body.length).toBe(0);
});
