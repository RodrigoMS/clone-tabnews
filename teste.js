class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400; // Corrigido: statusCOde → statusCode
  }
}

// Simulação de um objeto user com método save
const user = {
  save(input) {
    console.log("Usuário salvo:", input);
  },
};

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
}

// Exemplo de uso
try {
  saveUser({
    name: "Rodrigo",
    username: "rodrigoms",
    age: 30,
  });
} catch (error) {
  if (error instanceof ReferenceError || error instanceof ValidationError) {
    console.error("Erro de validação:", error.message);
  } else {
    console.error("Erro desconhecido:", error.stack);
  }
}
