// Testes de integração

test("GEt to /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  // Espera que algo vindo do sistema no final tenha o seguinte valor.
  expect(response.status).toBe(200);
});
