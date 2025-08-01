import { createRouter } from "next-connect";
import database from "infra/database";
import controller from "infra/controller.js";

const router = createRouter();

router.get(getHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const updatedAt = new Date().toISOString();

  //const databaseVersionResult = await database.query("SHOW server_version;");
  //const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  //const databaseMaxConnectionsResult = await database.query(
  //  "SHOW max_connections;",
  //);

  //const databaseMaxConnectionsValue =
  //  databaseMaxConnectionsResult.rows[0].max_connections;

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
}
