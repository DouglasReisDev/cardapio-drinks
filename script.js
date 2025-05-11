const drinks = [
  {
    nome: "Margarita",
    alcool: true,
    descricao: "Tequila, Cointreau e suco de limão.",
    imagem: "imagens/margarita.png",
    receita: "1 Em uma coqueteleira, coloque gelo, o açúcar, o Cointreau, o suco de limão e a tequila. Agite até o copo ficar gelado ---- 2 Passe limão na borda do copo. Coloque sal em um prato raso e mergulhe a borda do copo. ---- 3 Coloque o drinque no copo, sem o gelo ."
  },
  {
    nome: "Martini",
    alcool: true,
    descricao: "Gin e vermute seco.",
    imagem: "imagens/martini.png",
    receita: "1. Misture gin e vermute com gelo. 2. Coe para taça e adicione azeitona."
  },
  {
    nome: "Negroni",
    alcool: true,
    descricao: "Gin, Campari e vermute rosso.",
    imagem: "imagens/negroni.png",
    receita: "1. Misture os ingredientes com gelo. 2. Sirva com fatia de laranja."
  },
  {
    nome: "Old Fashioned",
    alcool: true,
    descricao: "Whisky, açúcar e angostura.",
    imagem: "imagens/old-fashioned.png",
    receita: "1. Amasse o açúcar com angostura. 2. Adicione whisky e gelo."
  },
  {
    nome: "Daiquiri",
    alcool: true,
    descricao: "Rum, limão e açúcar.",
    imagem: "imagens/daiquiri.png",
    receita: "1. Bata tudo com gelo. 2. Coe para taça gelada."
  },
  {
    nome: "Caipirinha",
    alcool: true,
    descricao: "Cachaça, limão e açúcar.",
    imagem: "imagens/caipirinha.png",
    receita: "1. Amasse limão e açúcar. 2. Adicione cachaça e gelo."
  },
  {
    nome: "Cosmopolitan",
    alcool: true,
    descricao: "Vodka, Cointreau, limão e cranberry.",
    imagem: "imagens/cosmopolitan.png",
    receita: "1. Bata tudo com gelo. 2. Coe e sirva com casca de laranja."
  },
  {
    nome: "Manhattan",
    alcool: true,
    descricao: "Whisky, vermute e angostura.",
    imagem: "imagens/manhattan.png",
    receita: "1. Misture com gelo. 2. Coe e decore com cereja."
  },
  
  {
    nome: "Mojito",
    alcool: true,
    descricao: "Rum, hortelã, limão e água com gás.",
    imagem: "imagens/mojito.png",
    receita: "1. Amasse hortelã e limão. 2. Adicione rum e água com gás."
  },
  {
    nome: "Whisky Sour",
    alcool: true,
    descricao: "Whisky, limão e açúcar.",
    imagem: "imagens/whisky-sour.png",
    receita: "1. Bata tudo com gelo. 2. Coe para um copo com gelo."
  },
  
  {
    nome: "Piña Colada",
    alcool: true,
    descricao: "Rum, abacaxi e leite de coco.",
    imagem: "imagens/pina-colada.png",
    receita: "1. Bata tudo com gelo. 2. Sirva com pedaço de abacaxi."
  },
  {
    nome: "Gin Tônica",
    alcool: true,
    descricao: "Gin e água tônica.",
    imagem: "imagens/gin-tonica.png",
    receita: "1. Sirva gin com gelo e complete com água tônica. 2 Para sabores adicione frutas masseradas ou xarope. "
  },
  {
    nome: "Cuba Libre",
    alcool: true,
    descricao: "Rum, coca-cola e limão.",
    imagem: "imagens/cuba-libre.png",
    receita: "1. Misture com gelo e adicione fatia de limão."
  },
  {
    nome: "Tequila Sunrise",
    alcool: true,
    descricao: "Tequila, suco de laranja e grenadine.",
    imagem: "imagens/tequila-sunrise.png",
    receita: "1. Misture tequila e laranja. 2. Adicione grenadine lentamente."
  },
  {
    nome: "Sex on the Beach",
    alcool: true,
    descricao: "Vodka, licor de pêssego, laranja e cranberry.",
    imagem: "imagens/sex-on-the-beach.png",
    receita: "1. Misture tudo com gelo e sirva decorado."
  },
  {
    nome: "Aperol Spritz",
    alcool: true,
    descricao: "Aperol, prosecco e água com gás.",
    imagem: "imagens/aperol-spritz.png",
    receita: "1. Misture e adicione fatia de laranja."
  },
  {
    nome: "Long Island Iced Tea",
    alcool: true,
    descricao: "Vodka, gin, rum, tequila, triple sec e coca.",
    imagem: "imagens/long-island.png",
    receita: "1. Misture todos os ingredientes. 2. Sirva com limão."
  },
  {
  nome: "Virgin Mojito",
  alcool: false,
  descricao: "Hortelã, limão, açúcar e água com gás.",
  imagem: "imagens/virgin-mojito.png",
  receita: "1. Amasse hortelã com limão e açúcar. 2. Adicione gelo e complete com água com gás."
},
{
  nome: "Pink Lemonade",
  alcool: false,
  descricao: "Suco de limão, xarope de cranberry e soda.",
  imagem: "imagens/pink-lemonade.png",
  receita: "1. Misture o suco de limão com o xarope e complete com soda."
},
{
  nome: "Limonada Suíça",
  alcool: false,
  descricao: "Limão batido com água e açúcar.",
  imagem: "imagens/limonada-suica.png",
  receita: "1. Bata limão com água e açúcar. 2. Sirva com gelo."
},
{
  nome: "Coquetel de Frutas",
  alcool: false,
  descricao: "Suco de laranja, abacaxi, grenadine e frutas.",
  imagem: "imagens/coquetel-frutas.png",
  receita: "1. Misture os sucos com gelo. 2. Decore com frutas."
},
{
  nome: "Smoothie de Morango",
  alcool: false,
  descricao: "Morango, iogurte e mel.",
  imagem: "imagens/smoothie-morango.png",
  receita: "1. Bata tudo no liquidificador. 2. Sirva gelado."
}

] 

function mostrarDrinks(lista) {
  const div = document.getElementById("cardapio");
  div.innerHTML = "";
  lista.forEach(drink => {
    div.innerHTML += `
      <div class="drink" onclick="abrirModal('${drink.nome}')">
        <img src="${drink.imagem}" alt="${drink.nome}" class="drink-img">
        <h3>${drink.nome}</h3>
        <p>${drink.descricao}</p>
      </div>
    `;
  });
}

function filtrarDrinks(tipo) {
  if (tipo === 'todos') {
    mostrarDrinks(drinks);
  } else if (tipo === 'alcool') {
    mostrarDrinks(drinks.filter(d => d.alcool));
  } else {
    mostrarDrinks(drinks.filter(d => !d.alcool));
  }
}

function buscarDrink() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const filtrados = drinks.filter(d => d.nome.toLowerCase().includes(termo));
  mostrarDrinks(filtrados);
}

function abrirModal(nomeDrink) {
  const drink = drinks.find(d => d.nome === nomeDrink);
  document.getElementById("modal-nome").innerText = drink.nome;
  document.getElementById("modal-receita").innerText = drink.receita;
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

mostrarDrinks(drinks);
