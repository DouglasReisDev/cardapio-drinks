const drinks = [
  {
    nome: "Margarita",
    alcool: true,
    descricao: "Tequila, Cointreau e suco de limão.",
    imagem: "imagens/margarita.png",
    receita: "Em uma coqueteleira com gelo, adicione 50 ml de tequila, 25 ml de licor de laranja (Cointreau ou Triple Sec) e 25 ml de suco de limão fresco. Agite bem. Sirva coado em um copo com a borda salgada e decore com uma rodela de limão."
  },
  {
    nome: "Martini",
    alcool: true,
    descricao: "Gin e vermute seco.",
    imagem: "imagens/martini.png",
    receita: "Em um Copo Mixing Glass com gelo, adicione 60 ml de gin e 10 ml de vermute seco. Mexa suavemente por 20 segundos e coe para uma taça de coquetel gelada. Finalize com uma azeitona ou twist de limão para decorar.   ."
  },
  {
    nome: "Negroni",
    alcool: true,
    descricao: "Gin, Campari e vermute rosso.",
    imagem: "imagens/negroni.png",
    receita: "Em um copo baixo com gelo, adicione 30 ml de gin, 30 ml de vermute rosso e 30 ml de Campari. Mexa suavemente por alguns segundos e decore com uma casca de laranja."
  },
  {
    nome: "Old Fashioned",
    alcool: true,
    descricao: "Whisky, açúcar e angostura.",
    imagem: "imagens/old-fashioned.png",
    receita: "Em copo baixo, dissolva 1 torrão de açúcar, 2-3 dashes de Angostura e um pouco de água. Adicione 60 ml de bourbon e gelo. Mexa e decore com casca de laranja."
  },
  {
    nome: "Daiquiri",
    alcool: true,
    descricao: "Rum, limão e açúcar.",
    imagem: "imagens/daiquiri.png",
    receita: "Em uma coqueteleira com gelo, adicione 50 ml de rum branco, 25 ml de suco de limão fresco e 15 ml de xarope de açúcar. Agite bem, coe para uma taça gelada e sirva sem gelo."
  },

  {
    nome: "Caipirinha",
    alcool: true,
    descricao: "Cachaça, limão e açúcar.",
    imagem: "imagens/caipirinha.png",
    receita: "Macere 1 limão em pedaços com 2 colheres de açúcar, adicione 50 ml de cachaça e bastante gelo. Mexa bem e sirva."
  },
  {
    nome: "Cosmopolitan",
    alcool: true,
    descricao: "Vodka, Cointreau, limão e cranberry.",
    imagem: "imagens/cosmopolitan.png",
    receita: "Agite com gelo 40 ml de vodka, 15 ml de licor de laranja, 15 ml de suco de limão e 30 ml de suco de cranberry. Coe para taça gelada e decore com casca de laranja."
  },
  {
    nome: "Manhattan",
    alcool: true,
    descricao: "Whisky, vermute e angostura.",
    imagem: "imagens/manhattan.png",
    receita: "Misture em copo com gelo 50 ml de whisky, 20 ml de vermute rosso e 2 dashes de Angostura. Mexa, coe e sirva em taça com cereja."
  },
  
  {
    nome: "Mojito",
    alcool: true,
    descricao: "Rum, hortelã, limão e água com gás.",
    imagem: "imagens/mojito.png",
    receita: "Macere 8 folhas de hortelã, 1 colher de açúcar e 25 ml de suco de limão. Adicione 50 ml de rum branco, gelo e complete com água com gás. Mexa e decore com hortelã."
  },
  
  {
    nome: "Whisky Sour",
    alcool: true,
    descricao: "Whisky, limão e açúcar.",
    imagem: "imagens/whisky-sour.png",
    receita: "Agite com gelo 50 ml de whisky, 25 ml de suco de limão, 20 ml de xarope de açúcar e opcionalmente 1 clara de ovo. Coe para copo com gelo e decore com limão ou cereja"
  },
  
  {
    nome: "Piña Colada",
    alcool: true,
    descricao: "Rum, abacaxi e leite de coco.",
    imagem: "imagens/pina-colada.png",
    receita: "Bata no liquidificador com gelo 50 ml de rum branco, 30 ml de leite de coco e 90 ml de suco de abacaxi. Sirva em copo alto e decore com abacaxi e cereja (opcional)."
  },
  {
    nome: "Gin Tônica",
    alcool: true,
    descricao: "Gin e água tônica.",
    imagem: "imagens/gin-tonica.png",
    receita: "Em um copo alto com bastante gelo, adicione 50 ml de gin, complete com água tônica e aromatize com ingredientes como limão, morango, pepino, hortelã, alecrim, zimbro ou especiarias. Mexa suavemente e sirva "
  },
  {
    nome: "Cuba Libre",
    alcool: true,
    descricao: "Rum, coca-cola e limão.",
    imagem: "imagens/cuba-libre.png",
    receita: "Em um copo alto com gelo, adicione 50 ml de rum branco, suco de meio limão e complete com refrigerante de cola. Mexa levemente e decore com fatia de limão"
  },
  {
    nome: "Tequila Sunrise",
    alcool: true,
    descricao: "Tequila, suco de laranja e grenadine.",
    imagem: "imagens/tequila-sunrise.png",
    receita: "Em um copo alto com gelo, adicione 50 ml de tequila e 100 ml de suco de laranja. Mexa levemente e adicione 15 ml de grenadine cuidadosamente para criar o efeito degradê. Decore com fatia de laranja ou cereja."
  },
  {
    nome: "Sex on the Beach",
    alcool: true,
    descricao: "Vodka, licor de pêssego, laranja e cranberry.",
    imagem: "imagens/sex-on-the-beach.png",
    receita: "Em um copo alto com gelo, adicione 40 ml de vodka, 20 ml de licor de pêssego, 40 ml de suco de laranja e 40 ml de suco de cranberry. Mexa levemente e decore com fatia de laranja ou cereja."
  },
  {
    nome: "Aperol Spritz",
    alcool: true,
    descricao: "Aperol, prosecco e água com gás.",
    imagem: "imagens/aperol-spritz.png",
    receita: "Em uma taça grande com gelo, adicione 90 ml de espumante brut, 60 ml de Aperol e 30 ml de água com gás. Mexa suavemente e decore com fatia de laranja."
  },
  {
    nome: "Long Island Iced Tea",
    alcool: true,
    descricao: "Vodka, gin, rum, tequila, triple sec e coca.",
    imagem: "imagens/long-island.png",
    receita: "Em um copo alto com gelo, adicione 15 ml de vodka, 15 ml de rum branco, 15 ml de gin, 15 ml de tequila, 15 ml de licor de laranja, 25 ml de suco de limão e 15 ml de xarope de açúcar. Complete com refrigerante de cola, mexa levemente e decore com fatia de limão."
  }, 
    
  {
    nome: "Moscow-Mule",
    alcool: true,
    descricao: "Vodka,limão, xarope de açucar e espuma de genbibre   .",
    imagem: "imagens/moscow-mule.png",
    receita: " Em uma caneca metálica ou copo baixo com gelo, adicione 50 ml de vodka, 25 ml de suco de limão fresco e 10 ml de xarope de açúcar. Complete com gengibirra artesanal ou espuma de gengibre por cima. Finalize com raspas de limão ou hortelã."
  },

  {
  nome: "Virgin Mojito",
  alcool: false,
  descricao: "Hortelã, limão, açúcar e água com gás.",
  imagem: "imagens/virgin-mojito.png",
  receita: " Macere 8 folhas de hortelã com 2 colheres de chá de açúcar e 30 ml de suco de limão. Adicione gelo e complete com água com gás ou soda limonada. Mexa suavemente e decore com hortelã e rodela de limão."
},
{
  nome: "Pink Lemonade",
  alcool: false,
  descricao: "Suco de limão, xarope de cranberry e soda.",
  imagem: "imagens/pink-lemonade.png",
  receita: "Em um copo alto com gelo, misture 100 ml de suco de limão, 100 ml de água e 30 ml de xarope de cranberry ou grenadine. Adoce a gosto, mexa bem e decore com rodelas de limão e frutas vermelhas.."
},
{
  nome: "Limonada Suíça",
  alcool: false,
  descricao: "Limão batido com água e açúcar.",
  imagem: "imagens/limonada-suica.png",
  receita: "Bata no liquidificador 2 limões com casca (sem sementes), 500 ml de água gelada, 2 colheres de sopa de açúcar e gelo a gosto. Coe e sirva. Para a versão cremosa, adicione 2 colheres de sopa de leite condensado antes de bater."
},
{
  nome: "Coquetel de Frutas",
  alcool: false,
  descricao: "Suco de laranja, abacaxi, grenadine e frutas.",
  imagem: "imagens/coquetel-frutas.png",
  receita: "Em uma coqueteleira com gelo, adicione 50 ml de suco de laranja, 30 ml de suco de abacaxi, 20 ml de groselha ou grenadine e 15 ml de leite condensado (opcional). Agite bem, sirva em copo longo com gelo e decore com frutas picadas ou cereja."
},
{
  nome: "Smoothie de Morango",
  alcool: false,
  descricao: "Morango, iogurte e mel.",
  imagem: "imagens/smoothie-morango.png",
  receita: "Bata no liquidificador 1 xícara de morangos congelados, 100 ml de leite ou bebida vegetal, 1 colher de sopa de mel ou açúcar e gelo a gosto. Sirva cremoso em copo alto e decore com morangos frescos."
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
