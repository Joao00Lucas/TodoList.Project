// const form = document.querySelector("#formStorage")
// const input = document.querySelector("#name")

// form.addEventListener("submit", function (event){
//     event.preventDefault(); //retira o comprtamento default de apagar todos os dados 
//     const name = input.value;
//     localStorage.setItem("nome", JSON.stringify ({nome: name, status: "em andamento"}))// precisa comecar com defaul - em andamento
//      //salvar - sobrescreve
//     const r = localStorage.getItem("nome");  //guardar -- fazer um array de objetos para armazenar as informações
//     console.log(r);
// });

// funcoes
//CRUD - Create, Read, Update, Delete
// pegar os dados - armazenar em um array de objetos - (obj com 3 campos) - inserir o novo elemento no array - e grava novamente com o setItem

    // const tarefa = document.querySelector('.inputTitulo');
    // // const descricao = document.querySelector('.userdesc')
    // const nivel = document.querySelector('.dificuldadeAtividade')

    // const botaoAdicionar = document.querySelector('.btnAdicionar')


    // botaoAdicionar.addEventListener('click', (e)=> {
    //     e.preventDefault();

    //     const adicionaTitulo = titulo.value
    //     const adicionaNivel = nivel.value

    //     console.log(adicionaTitulo);
    //     console.log(adicionaNivel);
    // })

// botaoAdicionar = document.addEventListener('click', (e)=> {
//     e.preventDefault();

//     const adicionaTitulo = tarefa.value
//     const adicionaNivel = nivel.value

//     console.log(adicionaTitulo);
//     console.log(adicionaNivel);

localStorage.setItem()





//criando card pelo js
const container = document.getElementById('container')

const row = document.createElement('div')
row.classList.add('row')

const col = document.createElement('div')
col.classList.add('col')

const card = document.createElement ('div')
card.classList.add('card')
card.style.width = '18rem'

const imagem = document.createElement('img')
imagem.classList.add("card-img-top")
imagem.setAttribute('src', 'Playlist13.jpg') 
imagem.setAttribute('alt', 'Imagem de capa do card') 

const corpoCard = document.createElement('div')
corpoCard.classList.add("card-body")

const title = document.createElement('h5')
title.classList.add('card-title')
title.innerText = 'inputTitulo' // nome da variavel que vai pegar os titulos

const body = document.createElement('p')
body.classList.add('card-text')
body.innerText = 'Adicione uma descrição para a tarefa...'

const rodape = document.createElement('div')
rodape.classList.add('rodape')

const edit = document.createElement('button')
edit.classList.add("userBtn-edit")
edit.innerHTML="<i class='fas fa-pen'></i>"

const remove = document.createElement('button')
remove.classList.add("userBtn-remove")
remove.innerHTML = "<i class='fas fa-xmark'></i>"

const confirma = document.createElement('a')
confirma.setAttribute('href', "#")
confirma.classList.add('btn', 'btn-primary')
confirma.innerText = 'OK'

const espacamento = document.createElement('div')
espacamento.classList.add("w-200")

row.appendChild(col)
col.appendChild(card)
card.appendChild(imagem)
card.appendChild(corpoCard)
corpoCard.appendChild(title)
corpoCard.appendChild(body)
card.appendChild(rodape)
rodape.appendChild(edit)
rodape.appendChild(remove)
rodape.appendChild(confirma)
row.appendChild(espacamento)

container.appendChild(row)
