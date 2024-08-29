// DECLARANDO VARIÁVEIS
const container = document.querySelector('.container');
const section3 = document.querySelector('.section3');  //cards

const titulo = document.querySelector('.userText');    // pegando informaçoes do card
const descricao = document.querySelector('.userDesc');
const nivel = document.querySelector('.userChoice');

// BOTÃO
const botaoAdicionar = document.querySelector('.userBtn');

// EVENTOS
botaoAdicionar.addEventListener('click', (e)=> {
    e.preventDefault();

    const adicionaTitulo = titulo.value
    const adicionaDescricao = descricao.value
    const adicionaNivel = nivel.value

    // console.log(adicionaNivel);

    const novoCard = {
        titulo:adicionaTitulo,
        descricao:adicionaDescricao,
        nivel:adicionaNivel
    };

    addCardLocalStorage(novoCard);

    showCard();

    titulo.value = " ";
    descricao.value = " ";
    nivel.value = " ";
});


function addCardLocalStorage(novoCard){
    let cardCriado = getLocalStorage();
    cardCriado.push(novoCard);
    localStorage.setItem('cardCriado', JSON.stringify(cardCriado));
}


function getLocalStorage(){
    const cardCriado = localStorage.getItem('cardCriado');
    return cardCriado ? JSON.parse(cardCriado) : [];
}

function showCard (){
    section3.innerHTML = " ";

    const cardCriado = getLocalStorage();

    cardCriado.forEach(novoCard => {

        const card = document.createElement('div');
        card.classList.add("task-card");

        const firstcard = document.createElement('div');
        firstcard.classList.add("task-alta");

        const title = document.createElement('h3');
        title.classList.add("titulo");

        const secondcard = document.createElement('div');
        secondcard.classList.add("description");

        const paragrafo = document.createElement('p');
        paragrafo.classList.add("descricao");

        const tirthcard = document.createElement('div');
        tirthcard.classList.add("buttons-task");

        const botaocheck = document.createElement('button');
        botaocheck.classList.add('userBtn-check');
        botaocheck.innerHTML = '<i class="fas fa-check"></i>';

        const botaoedit = document.createElement('button');
        botaoedit.classList.add('userBtn-edit');
        botaoedit.innerHTML = '<i class="fas fa-pen"></i';

        const botaoremove = document.createElement('button');
        botaoremove.classList.add('userBtn-remove');
        botaoremove.innerHTML = '<i class="fas fa-xmark"></i>';

        section3.appendChild(card)
        card.appendChild(firstcard)
        firstcard.appendChild(title)
        card.appendChild(secondcard)
        secondcard.appendChild(paragrafo)
        card.appendChild(tirthcard)
        tirthcard.appendChild(botaocheck)
        tirthcard.appendChild(botaoedit)
        tirthcard.appendChild(botaoremove)
        container.appendChild(section3)

        title.innerHTML = novoCard.titulo;
        paragrafo.innerHTML = novoCard.descricao;
        if (novoCard.nivel == "baixa") {
            firstcard.classList.add("task-baixa");
        } else if (novoCard.nivel == "media"){
            firstcard.classList.add("task-media");
        }  else {
            firstcard.classList.add("task-alta");
        }

    });
}

showCard();



//localStorage

// let cardCriado = [];

// function setLocalStorage(){
//     localStorage.setItem(adicionaTitulo, JSON.stringify(titulo))
//     return localStorage
// }

// function getLocalStorage(){

// }




// function addCard (){
//     if(localStorage.getItem('armazena')){
//         cardCriado = JSON.parse(localStorage.getItem('armazena'));
//     }

//     let novoCard = document.getElementById("task-card").value = " ";

//     cardCriado.push(novoCard);
    
//     document.getElementById('task-card').value = " ";
//     localStorage.setItem('armazena',JSON.stringify(cardCriado));
// }



// function showCard(){
//     let pesquisaCard = document.getElementById('pesquisaBtn');
//     pesquisaCard.innerHTML = "";

//     if (localStorage.getItem('armazena')){
//         cardCriado = JSON.parse(localStorage.getItem('armazena'));
//     }

//     for (let i in cardCriado){
//         let cartao = document.createElement("card");
//         cartao.innerHTML = cardCriado[i];
//         pesquisaCard.append(card)
//     }
// }

// function clearCard(){
//     cardCriado = [];
//     localStorage.setItem('armazena', JSON.stringify(cardCriado));

//     showCard();
// }


// const section1 = document.querySelector("#section1")
// const filtrando = document.querySelector("#filtrando")
// const pesquisaBnt = document.querySelector("#pesquisaBnt")

// section1.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     const tarefa = document.querySelector("#userText")

//     localStorage.setItem("userText", tarefa.value)
// });


//const card =[];


// nameForm  section1
// welcome   filtrando
// logout    pesquisaBnt

// card.addEventListener("submit", function (event){
//      event.preventDefault(); //retira o comprtamento default de apagar todos os dados 
//      localStorage.setItem("Titulo", JSON.stringify ({titulo: adicionaTitulo, filtro: "Fazendo"}))// precisa comecar com defaul - em andamento
//       //salvar - sobrescreve
//      const r = localStorage.getItem("nome");  //guardar -- fazer um array de objetos para armazenar as informações
//      console.log(r);
//  });

//CRIAR UMA FUNCAO QUE VAI TRANSFORMAR O CARD EM STRING COM JSON - ADICIONAR A FUNCAO NOS EVENTOS DE EDITAR, EXCLUIR E SELECIONAR
//FUNCAO PRA SALVAR E OUTRA PARA ATUALIZAR - JOGAR NA TELA