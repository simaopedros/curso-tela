// Dados simulando um arquivo JSON incorporado no código
const aulas = [
    {
        nome: "Aula 01 - O que é RPA?",
        video: "https://iframe.mediadelivery.net/embed/45132/02279449-af90-4f39-b142-c8e2b590f9c1?autoplay=true",
        recursos: "#"
    },
    {
        nome: "Aula 02 - Logica e Algoritmo - Uma introdução",
        video: "https://iframe.mediadelivery.net/embed/45132/4c89fc9a-a35e-42b4-a28e-1578beb88181?autoplay=true",
        recursos: "https://drive.google.com/file/d/11PgW8bY6CcBon_aJt6klUUDs4qsLSKaz/view?usp=sharing"
    },{
        nome: "Aula 03 - Criando uma conta UiPath",
        video: "https://iframe.mediadelivery.net/embed/45132/946e2b7d-5e3c-47c0-b915-f9adf1327bf1?autoplay=true",
        recursos: "https://www.uipath.com/"
    },{
        nome: "Aula 04 - Criando Uma Organização",
        video: "https://iframe.mediadelivery.net/embed/45132/17646bb1-0e95-48d1-a953-a282e7356d01?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 05 - Instalando o UiPath",
        video: "https://iframe.mediadelivery.net/embed/45132/20525b16-9b01-425c-bb50-feaba2b91e4b?autoplay=true",
        recursos: "https://www.uipath.com/"
    },{
        nome: "Aula 06 - Logando no Aplicativo Desktop e Habilitando as Extensões",
        video: "https://iframe.mediadelivery.net/embed/45132/10bbbd5d-4245-44e6-b4e4-3c3d0f560959?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 07 - Mudando de Perfil",
        video: "https://iframe.mediadelivery.net/embed/45132/83b8ed07-d7ed-4cfa-94c1-bc9409233bbb?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 08 - Conhecendo a Interface do UiPath - INICIO",
        video: "https://iframe.mediadelivery.net/embed/45132/054837f2-28f7-45bd-ac0a-9a5b8cf4bddb?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 09 - Conhecendo a Interface do UiPath - MODELO",
        video: "https://iframe.mediadelivery.net/embed/45132/68b8e9fb-65e8-41ee-9dc2-1a2c6f0793db?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 10 - Conhecendo a Interface do UiPath - FERRAMENTAS",
        video: "https://iframe.mediadelivery.net/embed/45132/1ed7fb70-4631-449f-9e0f-03102a24c904?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 10 - Conhecendo a Interface do UiPath - DEFINIÇÕES",
        video: "https://iframe.mediadelivery.net/embed/45132/28560089-4186-427a-b3fc-a95f2076f3b1?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 11 - Criando um novo projeto",
        video: "https://iframe.mediadelivery.net/embed/45132/f9f87258-f739-47c5-b4c1-833551a35b9c?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 12 - Atividades",
        video: "https://iframe.mediadelivery.net/embed/45132/b57b48d9-6e1f-4993-bbd7-b2070599c695?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 13 - Propriedades",
        video: "https://iframe.mediadelivery.net/embed/45132/62081ea8-c29a-4e77-8346-2c5187305ece?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 14 - Faixa de Opções",
        video: "https://iframe.mediadelivery.net/embed/45132/299ef9c7-1e60-4605-ad61-921ccede467f?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 15 - Nosso Primeiro Robo - Gravador Web",
        video: "https://iframe.mediadelivery.net/embed/45132/f02d02c1-3bd6-4de2-ae35-e31fcb28daf6?autoplay=true",
        recursos: "https://www.rpasamples.com/findunicornname"
    },{
        nome: "Aula 16 - Nosso Primeiro Robo - Passo a Passo",
        video: "https://iframe.mediadelivery.net/embed/45132/f9883d20-8dc6-49f3-8a21-2966c6336277?autoplay=true",
        recursos: "https://www.rpasamples.com/findunicornname"
    },{
        nome: "Aula 17 - Extração da Dados",
        video: "https://iframe.mediadelivery.net/embed/45132/3c4dff94-da6e-487c-9a30-9380549534cd?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 18 - Salvando os dados em uma Planilha",
        video: "https://iframe.mediadelivery.net/embed/45132/1afa3d68-5c83-4f28-9b64-84bcb0c341c6?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 19 - Manipulando Planilhas - Write Cell e For Each Data Row",
        video: "https://iframe.mediadelivery.net/embed/45132/f08de8ab-9a33-4366-9549-8a82efd1f7f4?autoplay=true",
        recursos: "https://docs.google.com/spreadsheets/d/18FTVhV_WKwr9VqLqbQWGtvytJJkY3epa/edit?amp;ouid=110029684008878935003&amp;rtpof=true&amp;sd=true#gid=1467211835"
    },{
        nome: "Aula 20 - Read Range",
        video: "https://iframe.mediadelivery.net/embed/45132/8e561358-1842-4280-85ba-7be0ee554755?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 21 - Append Range",
        video: "https://iframe.mediadelivery.net/embed/45132/ea2068e8-0a53-48bf-bca8-a5fd182f8fde?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 22 - Delete",
        video: "https://iframe.mediadelivery.net/embed/45132/8fc92ab9-5810-4afb-b931-44e1147765ba?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 23 - Configurando e-mail e enviando arquivos por anexo",
        video: "https://iframe.mediadelivery.net/embed/45132/09de33ae-8d25-456f-9520-5b19fdefb8c1?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 24 - Lendo mensagens de Email e Baixando Anexos",
        video: "https://iframe.mediadelivery.net/embed/45132/c4f81962-74d6-4328-acbe-e5d1a2f6c81b?autoplay=true",
        recursos: "#"
    },{
        nome: "Aula 25 - Trabalhando com arquivos Word",
        video: "https://iframe.mediadelivery.net/embed/45132/423062e4-7713-4fe8-86f9-6a0c65efd9c5?autoplay=true",
        recursos: "#"
    }
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
