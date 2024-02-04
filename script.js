// Dados simulando um arquivo JSON incorporado no código
const aulas = [
    {
        nome: "Aula 1",
        video: "https://iframe.mediadelivery.net/embed/45132/VIDEO_ID_1?autoplay=true",
        recursos: "URL_DO_RECURSO_1"
    },
    {
        nome: "Aula 2",
        video: "https://iframe.mediadelivery.net/embed/45132/VIDEO_ID_2?autoplay=true",
        recursos: "URL_DO_RECURSO_2"
    },
    // Adicione mais aulas conforme necessário
];

function inicializarAulas() {
    const listaAulasElement = document.getElementById('aulas');
    listaAulasElement.innerHTML = ''; // Limpar lista atual

    aulas.forEach((aula, index) => {
        const li = document.createElement('li');
        li.textContent = aula.nome;
        li.onclick = function() { selecionarAula(index); };
        listaAulasElement.appendChild(li);
    });

    carregarProgresso();
}

function selecionarAula(index) {
    const aula = aulas[index];

    // Atualizar o vídeo usando o padrão fornecido
    const videoContainer = document.getElementById('video');
    videoContainer.innerHTML = `
        <p style="position:relative;padding-top:56.25%">
            <iframe src="${aula.video}" style="border:none;position:absolute;top:0;height:100%;width:100%" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
        </p>`;

    // Atualizar o link dos recursos
    const recursosContainer = document.getElementById('recursos');
    recursosContainer.innerHTML = `<a href="${aula.recursos}" target="_blank">Acessar Recursos da Aula</a>`;

    // Salvar o progresso do usuário
    localStorage.setItem('progressoAula', index);
}

function carregarProgresso() {
    const progressoSalvo = localStorage.getItem('progressoAula');
    if (progressoSalvo !== null) {
        selecionarAula(parseInt(progressoSalvo, 10));
    } else {
        selecionarAula(0); // Carregar a primeira aula se não houver progresso salvo
    }
}

document.addEventListener('DOMContentLoaded', inicializarAulas);
