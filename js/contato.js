const forml = document.getElementById("formlContato");

forml.addEventListener("submit", async function(event){
    event.preventDefault();
})

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const mensagem = document.getElementById("mensagem").value;

const novaMensagem = {nome, email, mensagem};

try{
    const resposta = await fetch("http://localhost:3000/mensagem",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(novaMensagem)
    });

    const dados = await resposta.text();

    alert(dados);

    forml.reset();

}catch(erro){ 
    alert(`Erro: ${erro}`);
};