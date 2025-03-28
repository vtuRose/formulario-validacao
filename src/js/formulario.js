const campos = {
  nome: document.getElementById("nome"),
  email: document.getElementById("email"),
  telefone: document.getElementById("telefone"),
  mensagem: document.getElementById("mensagem"),
};

const erros = {
  nome: document.getElementById("erroNome"),
  email: document.getElementById("erroEmail"),
  telefone: document.getElementById("erroTelefone"),
  mensagem: document.getElementById("erroMensagem"),
};

function validarCampo(campoName) {
  const campo = campos[campoName];
  const erro = erros[campoName];

  if (campo.value.trim() === "") {
    campo.style.border = "2px solid #F52E2E";
    erro.innerHTML = "campo obrigatório";
  } else {
    campo.style.border = "2px solid #00C22B";
    erro.innerHTML = "";
  }
}

Object.keys(campos).forEach((campoName) => {
  campos[campoName].addEventListener("input", () => {
    validarCampo(campoName);
  });
});

function validarFormulario() {
  if (nome.value.trim() === "" || email.value.trim() === "" || telefone.value.trim() === "" || mensagem.value.trim() === "") {
    alert("Preencha todos os campos obrigatórios");
  } else {
    alert("Formulário enviado com sucesso");
  }
}
