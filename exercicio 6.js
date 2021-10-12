//Ler	o	ano	atual	e	o	ano	de	nascimento	de	uma	pessoa.	Escrever	uma	mensagem	que	diga	se	ela	poderá	ou	não	votar	este	ano	(não	é	necessário	considerar	o	mês	em	que	a	pessoa nasceu).

console.log("VOCÊ PODE VOTAR? ")
var anoEleicao = prompt("Ano das eleições: ");
var anoNascimento = prompt("Ano do nascimento: ");
var idade = anoEleicao - anoNascimento;

if (idade >= 16){
  console.log("Uma pessoa nascida em "+anoNascimento+" pode votar nas eleições de "+anoEleicao+"\nIdade: "+idade);
}
else {
  console.log("Uma pessoa nascida em "+anoNascimento+" NÃO pode votar nas eleições de "+anoEleicao+".\nIdade: "+idade+".");
}