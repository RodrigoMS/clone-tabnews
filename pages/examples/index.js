function CapsLock(propriedades) {
  const textoEmCapslock = propriedades.texto.toUpperCase();
  return textoEmCapslock;
}

async function fetchStatus() {
  //Data Fetching
  const response = await fetch("/api/v1/status");
  const responseBody = await response.json();

  return responseBody;
}

// Sinaliza a função a ser executada ao chamar a end-point.
export default function StatusPage() {
  console.log(fetchStatus());

  return (
    <>
      <h1>Status</h1>
      <CapsLock texto="Olá mundo!" />
    </>
  );
}
