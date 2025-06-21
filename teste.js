class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCOde = 400;
  }
}

function saveUser(input) {
  if (!input) {
    throw new ReferenceError("É necessário enviar o 'input'.");
  }

  if (!input.name) {
    throw new ValidationError("Preencha o seu nome completo.");
  }

  if (!input.username) {
    throw new ValidationError("Preencha o seu apelido.");
  }

  if (!input.age) {
    throw new ValidationError("Preencha a idade.");
  }

  user.save(input);

  try {
    saveUser({});
  } catch (error) {
    if (error instanceof ReferenceError) {
      throw error;
    }

    if (error instanceof ValidationError) {
      console.log(error);
      return;
    }

    console.log("Erro desconhecido");
    console.log(error.stack);
  }
}
