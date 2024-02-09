var valorTotal = [0,0];
var valorProduto = [50.00, 30.00];
var qtd = [0,0];

function adicionarItem(item) {

  var quantidade = document.getElementById('quantidade' + item);//chama o item do html passado no onclick
  var total = document.getElementById('total' + item);//chama o item do html passado no onclick
  qtd[item] += 1;//calcula a quantidade de itens
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];//calcula a quantidade x preço
  quantidade.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  valorCompra()
}

function removerItem(item) {

  if(qtd[item] > 0) {
    qtd[item] -=1;
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);
    quantidade.innerHTML = qtd[item];
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra()
  }
}

function valorCompra(){

  var valorTotalCompra = document.getElementById('valorTotalCompra');
  var valor = 0;

  for(var i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }

  valorTotalCompra.innerHTML =valor.toFixed(2);
}