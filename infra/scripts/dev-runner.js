const { exec, spawn } = require("child_process");
const os = require("os");

async function runDev() {
  try {
    // Executa os comandos iniciais em paralelo
    await Promise.all([
      runCommand("npm run services:up"),
      runCommand("npm run services:wait:database"),
      runCommand("npm run migrations:up"),
    ]);

    // Inicia o servidor de desenvolvimento
    const nextDevProcess = spawn("npm", ["run", "next:dev"], {
      stdio: "inherit",
    });

    // Lida com a interrupção do processo
    const handleShutdown = () => {
      console.log("Interceptando interrupção...");
      runCommand("npm run services:stop").finally(() => process.exit());
    };

    if (os.platform() === "win32") {
      // No Windows, captura o evento 'close' do processo
      process.on("SIGINT", handleShutdown);
      process.on("SIGTERM", handleShutdown);
    } else {
      // No Linux/macOS, captura o sinal SIGINT (Ctrl+C)
      process.on("SIGINT", handleShutdown);
    }

    nextDevProcess.on("close", handleShutdown);
  } catch (error) {
    console.error("Erro durante a execução:", error);
  }
}

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar "${command}":`, stderr);
        reject(error);
      } else {
        console.log(`Saída de "${command}":`, stdout);
        resolve();
      }
    });
  });
}

runDev();
