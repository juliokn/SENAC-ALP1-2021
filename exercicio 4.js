//Um	caixa	precisa	de	um	programa	que	o	auxilie	no	fornecimento	de	valores	com	o	mínimo de	cédulas/moedas	possíveis.	Monte	um	programa	que	seja	fornecido	o	valor	(inteiro)	a	ser	fornecido	e	tenha	como	saída	o	total	de	cédulas	utilizadas,	nos	valores	de	100,	50,	20,	10,	5,	2	e	1

var cedulas = [100,50,20,10,5,2,1];
var valorParaTroco = prompt("Valor para troco: ");
var quantidade;

for (var i = 0; i < cedulas.length; i++){
  quantidade = Math.floor(valorParaTroco/cedulas[i]);
  if (quantidade > 0) {
  process.stdout.write("Cédula: R$ "+cedulas[i]+",00 - Quantidade: "+quantidade+"\n");
  valorParaTroco = valorParaTroco-(cedulas[i]*quantidade);
  }
}

