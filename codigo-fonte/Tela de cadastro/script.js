document.addEventListener("DOMContentLoaded", function () {

    console.log("JS carregado!");

    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("Formulário enviado!");

        // --- VALIDAÇÃO DA SENHA ---
        const senha = document.getElementById("senha").value;
        const regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-={}[\]|\\:;"'<>,.?/]).{8,}$/;

        if (!regexSenha.test(senha)) {
            alert("A senha deve ter no mínimo 8 caracteres, incluindo pelo menos 1 número e 1 símbolo.");
            return;
        }

        // --- COLETA DOS DADOS ---
        const dados = {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            data_nascimento: document.getElementById("data_nascimento").value,
            email: document.getElementById("email").value,
            senha: senha, // 🔒 agora salva também
            endereco: document.getElementById("endereco").value,
            numero_bloco: document.getElementById("numero_bloco").value,
            complemento: document.getElementById("complemento").value,
            cep: document.getElementById("cep").value,
            telefone: document.getElementById("telefone").value,
            cpf: document.getElementById("cpf").value
        };

        // --- SALVAR NO LOCAL STORAGE ---
        localStorage.setItem("dadosUsuario", JSON.stringify(dados));

        alert("Dados salvos com sucesso!");
    });

});
