// ---------------------------------------------------------------------- //
//                                                                        //
//                         Serviços de Espera                             //
//                                                                        //
// ---------------------------------------------------------------------- //
// Arquivo: waitForAllServices.js                                         //
// Autor: RodrigoMS                                                       //
// Data: 31/01/2025                                                       //
// Descrição: Este arquivo contém a função para esperar todos os serviços //
// serem inicializados, garantindo que o servidor web esteja pronto antes //
// de prosseguir. Utiliza uma política de tentativas para assegurar a     //
// inicialização.                                                         //
// ---------------------------------------------------------------------- //

// Importa o módulo 'async-retry' para tratar tentativas de execução.
import retry from "async-retry";
import { faker } from "@faker-js/faker";

import database from "infra/database.js";
import migrator from "models/migrator.js";
import user from "models/user.js";

// Define uma função assíncrona para esperar todos os serviços.
async function waitForAllServices() {
  // Chama a função para esperar o servidor web.
  await waitForWebServer();

  // Define uma função assíncrona para esperar o servidor web.
  async function waitForWebServer() {
    // Tenta executar a função 'fetchStatusPage' até 100 vezes antes de desistir.
    return retry(fetchStatusPage, {
      // Define o número de tentativas antes de desistir.
      retries: 100,
      // Define o tempo máximo de espera em milissegundos antes de desistir.
      maxTimeout: 1000,
    });

    // Define uma função assíncrona para buscar a página de status.
    async function fetchStatusPage() {
      // Faz uma solicitação para a URL.
      const response = await fetch("http://localhost:3000/api/v1/status");

      // Verifica se o status da resposta não é 200 (OK).
      if (response.status !== 200) {
        // Lança um erro caso o status não seja 200.
        throw Error();
      }
    }
  }
}

async function clearDatabase() {
  // Removendo todos os esquemas (incluindo o esquema público)
  // e, em seguida, criando um novo esquema público.
  await database.query("drop schema public cascade; create schema public;");
}

async function runPendingMigrations() {
  await migrator.runPendingMigrations();
}

async function createUser(userObject) {
  return await user.create({
    username:
      userObject.username || faker.internet.username().replace(/[_.-]/g, ""),
    email: userObject.email || faker.internet.email(),
    password: userObject.password || "validpassword",
  });
}

// Exporta a função 'waitForAllServices' como padrão.
const orchestrator = {
  waitForAllServices,
  clearDatabase,
  runPendingMigrations,
  createUser,
};

export default orchestrator;
