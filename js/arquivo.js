// DECLARANDO VARIÁVEIS
const container = document.querySelector('.container');
const section3 = document.querySelector('.section3');

const titulo = document.querySelector('.userText');
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

    console.log(adicionaTitulo);
    console.log(adicionaDescricao);
    console.log(adicionaNivel);
})

const card = document.createElement('div');
card.classList.add("task-card");

const firstcard = document.createElement('div');
firstcard.classList.add("task-red");

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