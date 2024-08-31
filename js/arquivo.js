// DECLARANDO VARIÁVEIS
const titulo = document.querySelector('#user-text');
const descricao = document.querySelector('#userdesc');
const nivel = document.querySelector('#prioridade-select');
const botaoAdicionar = document.querySelector('.userBtn');
const botaoEditar = document.querySelector('.editBtn');
const section1 = document.querySelector('#todo-section');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#lista');
const section4 = document.querySelector('#edicao');
const inputTitulo = document.querySelector('.editText')
const inputDescricao = document.querySelector('.editDesc')
const inputSelect = document.querySelector('.editChoice')
const pesquisaInput = document.querySelector('#pesquisa-input')
const filtroCard = document.querySelector('#filtro-select')
const pesquisaBotao = document.querySelector('#pesquisa-btn')
const itens = []
let id = 0

// FUNÇÕES
// função cria card
const saveCard = (titulo, descricao, nivel, idCard = null) => {
  section3.innerHTML = '';

  const cardCriado = getLocalStorage();
  cardCriado.forEach(novoCard => {

  
  let card;

  if (idCard !== null) {
    card = document.querySelector(`.card[data-id="${idCard}"]`);
   
    if (card) {
      card.querySelector('.card-title').innerText = titulo;
      card.querySelector('.card-text').innerText = descricao;

      card.querySelector('.card-title').classList.remove('task-baixa', 'task-media', 'task-alta');
      if (nivel === 'baixa') {
        card.querySelector('.card-title').classList.add('task-baixa');
      } else if (nivel === 'media') {
        card.querySelector('.card-title').classList.add('task-media');
      } else if (nivel === 'alta') {
        card.querySelector('.card-title').classList.add('task-alta');
      }
      return;
    }
  }

  // cria os elementos onde eles pertencem
  card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = idCard;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = titulo;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = descricao;

  const botaoConcluir = document.createElement('button');
  botaoConcluir.classList.add('btn', 'btn-check');
  botaoConcluir.innerHTML = '<i class="fas fa-check"></i>';

  const botaoEditar = document.createElement('button');
  botaoEditar.classList.add('btn', 'btn-edit');
  botaoEditar.innerHTML = '<i class="fas fa-pen"></i>';

  const botaoExcluir = document.createElement('button');
  botaoExcluir.classList.add('btn', 'btn-remove');
  botaoExcluir.innerHTML = '<i class="fas fa-xmark"></i>';

  // Adiciona classes de acordo com a prioridade
  cardTitle.innerHTML = novoCard.titulo;
  cardText.innerHTML = novoCard.descricao;
  if (novoCard.nivel === 'baixa') {
    cardTitle.classList.add('task-baixa');
  } else if (novoCard.nivel === 'media') {
    cardTitle.classList.add('task-media');
  } else if (novoCard.nivel === 'alta') {
    cardTitle.classList.add('task-alta');
  }

  // Monta a estrutura do card
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(botaoConcluir);
  cardBody.appendChild(botaoEditar);
  cardBody.appendChild(botaoExcluir);
  card.appendChild(cardBody);
  section3.appendChild(card);

  id+= 1;
  })
};
saveCard();

// Troca as classes para esconder as sessões
const toggleSection = ()=> { //INCOMPLETA
    section1.classList.toggle('esconder');
    section2.classList.toggle('esconder');
    section3.classList.toggle('esconder');
    section4.classList.toggle('esconder');
}

// Captura o id de cada card para fazer a edição do conteúdo
const editCard = (idCard)=> {
  let itemEncontrado = itens.find(item => item.id === idCard)

    if (itemEncontrado) {
      const {titulo, descricao, nivel} = itemEncontrado;
      inputTitulo.value = titulo;
      inputDescricao.value = descricao;
      inputSelect.value = nivel;
      inputSelect.dataset.id = idCard;
    }
  };

// função que filtra os cards por concluido, fazendo ou todos criados
function applyFilters() {
  const filtroValor = filtroCard.value;
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const cardStatus = card.classList.contains('done') ? 'concluido' : 'fazendo';  

    if (filtroValor === 'todos' || filtroValor === cardStatus) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function addLocalStorage(novoCard) {
  let cardCriado = getLocalStorage();
  cardCriado.push(novoCard);
  localStorage.setItem('cardCriado', JSON.stringify(cardCriado));
}

function getLocalStorage(){
  const cardCriado = localStorage.getItem('cardCriado');
  return cardCriado ? JSON.parse(cardCriado) : [];
}

function removeLocalStorage(id) {
  let cardCriado = getLocalStorage();
  cardCriado = cardCriado.filter(card => card.id !== id);
  localStorage.setItem('cardCriado', JSON.stringify(cardCriado))
  saveCard()
}

// EVENTOS
// evento adiciona card
botaoAdicionar.addEventListener('click', (e) => {
  e.preventDefault();

  const tituloTarefa = titulo.value;
  const descricaoTarefa = descricao.value;
  const nivelTarefa = nivel.value;
  const idCard = id;

  if (tituloTarefa && nivelTarefa !== 'Nível da Tarefa') {
    saveCard(tituloTarefa, descricaoTarefa, nivelTarefa, idCard);

    const novoCard = {
      titulo: tituloTarefa,
      descricao: descricaoTarefa,
      nivel: nivelTarefa
    }

    addLocalStorage(novoCard);
    saveCard();

    // Limpa os campos de entrada após adicionar a tarefa
    titulo.value = '';
    descricao.value = '';
    nivel.value = 'Nível da Tarefa';

    itens.push({
      titulo: tituloTarefa, descricao: descricaoTarefa, nivel: nivelTarefa, id: idCard
    })

  } else {
    alert('Por favor, preencha o título e escolha um nível para a tarefa.');
  }
});

// Evento para marcar como concluída, editar ou excluir tarefa
document.addEventListener('click', (e) => {
  const target = e.target;
  const card = target.closest('.card');

  if (target.closest('.btn-check')) {
    card.classList.toggle('done');
  } else if (target.closest('.btn-edit')) {
    const idCard = parseInt(card.dataset.id);
    editCard(idCard);
    toggleSection();
  } else if (target.closest('.btn-remove')) {
    card.remove();
    removeLocalStorage()
  }
});

// permite editar o conteudo dentro dos meus inputs e o nivel
botaoEditar.addEventListener('click', (e)=>{
  e.preventDefault;

  const tituloEditado = inputTitulo.value;
  const descricaoEditada = inputDescricao.value;
  const nivelEditado = inputSelect.value;
  const idCard = parseInt(inputSelect.dataset.id);

  if (tituloEditado && nivelEditado !== 'Nível da Tarefa') {
    saveCard(tituloEditado, descricaoEditada, nivelEditado, idCard);

    const itemIndex = itens.findIndex(item => item.id === idCard);
    if (itemIndex !== -1) {
      itens[itemIndex] = { titulo: tituloEditado, descricao: descricaoEditada, nivel: nivelEditado, id: idCard };
    }

    toggleSection();
  }
})

// permite a busca do card através do nome dele
pesquisaInput.addEventListener('input', (e) => {
  const pesquisaValor = e.target.value.toLowerCase();
 
  const tarefasCriadas = document.querySelectorAll('.card');
 
  tarefasCriadas.forEach(card => {
    const cardTitulo = card.querySelector('.card-title').textContent.toLowerCase();
   
    if (cardTitulo.includes(pesquisaValor)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
})

pesquisaBotao.addEventListener('click', () => {
  pesquisaInput.value = '';

  const tarefasCriadas = document.querySelectorAll('.card');
  tarefasCriadas.forEach(card => {
    card.style.display = 'block';
  });
});
filtroCard.addEventListener('change', applyFilters);
saveCard();