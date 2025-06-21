import database from "infra/database.js";
import { InternalServerError } from "infra/errors";

class Status {
  constructor() {
    // Inicializações necessárias podem ser feitas aqui.
  }

  async handleRequest(request, response) {
    try {
      //const result = await database.query("SELECT 1 + 1 as sum;");
      //console.log(result.rows);

      // Obtém a data e hora atual, convertendo para o formato ISO 8601.
      const updatedAt = new Date().toISOString();

      // Obtém a versão do PostgreSQL.
      //const databaseVersion = await database.query(`SHOW server_version;`);

      const databaseName = process.env.POSTGRES_DB;
      const databaseStatus = await database.query({
        text: `SELECT 
              current_setting('server_version') AS server_version, 
              current_setting('max_connections')::int AS max_connections, 
              (SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1 ) AS opened_connections;`,

        values: [databaseName],
      });

      response.status(200).json({
        updated_at: updatedAt,
        dependencies: {
          database: {
            version: databaseStatus.rows[0].server_version,
            max_connections: databaseStatus.rows[0].max_connections,
            opened_connections: databaseStatus.rows[0].opened_connections,
          },
        },
      });
    } catch (error) {
      const publicErrorObject = new InternalServerError({
        cause: error,
      });

      console.log("\n Erro dentro do catch do controller:");
      console.error(publicErrorObject);

      response.status(500).json(publicErrorObject);
    }
  }
}
export default new Status().handleRequest;
