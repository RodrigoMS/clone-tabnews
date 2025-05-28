import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000, // Busca atualizações a cada 2 segundos

    // refreshInterval: 2, // Busca atualizações a cada 2 segundos
    // Altera a propriedade de cache de 2 segundo do swr para buscar
    // dados a cada 100 milissegundos.
    // Funcionalidade importante para diminuir as requisições de vários
    // componentes em um curto espaço de tempo. Mantendo os valores
    // cache interno para ser reaproveitado.
    //dedupingInterval: 100,
  });
  // Se for true os dados estão sendo carregados
  // Se for false os dados foram carregados e estão em data.
  //console.log(response.isLoading);
  //console.log(response.data);

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <>
      <h1>Status</h1>
      <div>Última atualização: {updatedAtText}</div>
    </>
  );
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let DatabaseStatusInformation = "Carregando...";

  if (!isLoading && data) {
    DatabaseStatusInformation = (
      <>
        <div>
          <p>
            Versão:
            {JSON.stringify(data.dependencies.database.version)}
          </p>

          <p>
            Conexões máximas:
            {JSON.stringify(data.dependencies.database.max_connections)}
          </p>

          <p>
            Conexões abertas:{" "}
            {JSON.stringify(data.dependencies.database.opened_connections)}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Database</h1>
      <div>{DatabaseStatusInformation}</div>
    </>
  );
}

export default function StatusPage() {
  return (
    <>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}
