document.getElementById("btn-carregar").addEventListener("click", () => {
  fetch("projetos.json") // Fazer requisição para o arquivo JSON
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados.");
      }
      return response.json(); // Converter resposta para JSON
    })

    .then((projetos) => {
      exibirProjetos(projetos); // Passar os dados para exibição
    })

    .catch((error) => {
      console.error("Erro:", error);
      alert("Não foi possível carregar os projetos.");
    });
});

function exibirProjetos(projetos) {
  const lista = document.getElementById("lista-projetos");
  lista.innerHTML = ""; // Limpar lista antes de adicionar novos
  projetos;

  projetos.forEach((projeto) => {
    // Criar a estrutura do projeto
    const projetoDiv = document.createElement("div");
    projetoDiv.classList.add("projeto");
    projetoDiv.classList.add(projeto.status.toLowerCase()); //Adicionar classe baseado no status

    // Adicionar o nome do projeto
    const titulo = document.createElement("h3");
    titulo.textContent = projeto.nome;
    projetoDiv.appendChild(titulo);

    // Adicionar a descrição
    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;
    projetoDiv.appendChild(descricao);

    // Adicionar o status
    const status = document.createElement("p");
    status.textContent = `Status: ${projeto.status}`;
    projetoDiv.appendChild(status);

    // Adicionar o projeto à lista
    lista.appendChild(projetoDiv);
  });
}
