const ListaProjetos = document.querySelector("#ListaProjetos");

const BuscaProjetos = document.querySelector("#BuscaProjetos");

let projetos = [];

async function carregarProjetos(){
    const resposta = await fetch("../data/projetos.json");
    console.log(resposta);

    projetos = await resposta.json();

    renderizarProjetos(projetos);
};

function renderizarProjetos(lista){
    ListaProjetos.innerHTML = "";

    lista.forEach(curso => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3> ${projeto.titulo} </h3>
            <img src=" ${projeto.img}" width="150" height="150">
            <p> ${projeto.descricao} </p>
            <p> <strong>CH: </strong> ${projeto.ch}</p>
            <a href="${projeto.url}"><button>Ver detalhes</button></a> 
        `;
        ListaProjetos.appendChild(card);
    })
}

BuscaProjetos.addEventListener("input", function(){
    const texto = BuscaProjetos.value.toLowerCase();

    const filtrados = cursos.filter((projeto) =>
    projeto.titulo.toLowerCase().includes(texto)

    )

    renderizarProjetos(filtrados);

})
  
carregarProjetos();