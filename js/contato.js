// Seleciona o formulário
const formulario = document.querySelector('form');

// Adiciona um evento de "escuta" para o envio (submit)
formulario.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar
    event.preventDefault();

    // Captura os valores dos campos usando os IDs que você criou no HTML
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você criaria a lógica para enviar os dados (ex: via Fetch para um JSON ou API)
    console.log("Dados capturados:");
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);

    // Feedback visual para o usuário
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa o formulário após o envio
    formulario.reset();
});

