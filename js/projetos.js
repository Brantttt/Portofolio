async function carregarProjetos() {
    const container = document.getElementById('container-projetos');

    try {
        // 1. Busca os dados do arquivo JSON
        const resposta = await fetch('projetos.json');
        const projetos = await resposta.json();

        // 2. Limpa o container (garantia de regra)
        container.innerHTML = "";

        // 3. Cria os cards dinamicamente
        projetos.forEach(projeto => {
            const card = document.createElement('div');
            
            // USE AQUI A MESMA CLASSE CSS QUE VOCÊ JÁ TEM
            card.classList.add('card-projeto'); 

            card.innerHTML = `
                <img src="${projeto.imagem}" alt="${projeto.nome}">
                <div class="projeto-info">
                    <h3>${projeto.nome}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.github}" target="_blank" class="btn-github">
                        Ver no GitHub
                    </a>
                </div>
            `;

            container.appendChild(card);
        });
    } catch (erro) {
        console.error("Erro ao carregar projetos:", erro);
        container.innerHTML = "<p>Erro ao carregar projetos.</p>";
    }
}

// Executa a função ao carregar a página
carregarProjetos();
