document.getElementById('btn-carregar').addEventListener('click', () => {
    fetch ('projetos.json') //Fazer requisição para arquivo JSON
         .then(response => {
            if (!response.ok) {
                throw Error('Erro ao carregar os dados');
            }
            return response.json(); //Converter resposta para JSON
         })    

            .then(projetos => {
                exibirProjetos(projetos); //Passar os dados para exibição
            })
            
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Não foi possível carregar os projetos');
                });
});