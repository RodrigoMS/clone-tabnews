import database from "infra/database.js";

class Status {
  constructor() {
    // Inicializações necessárias podem ser feitas aqui.
  }

  async handleRequest(request, response) {
    const result = await database.query("SELECT 1 + 1 as sum;");
    console.log(result.rows);
    response.status(200).json({ text: "Opa!" });
  }
}

export default new Status().handleRequest;
