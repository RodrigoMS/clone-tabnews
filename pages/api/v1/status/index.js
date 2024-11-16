class Status {
  constructor() {
    // Inicializações necessárias podem ser feitas aqui.
  }

  handleRequest(request, response) {
    response.status(200).json({ text: "Opa!" });
  }
}

export default new Status().handleRequest;
