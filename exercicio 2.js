//Um	 município	 deseja	 saber	 a	 porcentagem	 de	 votos	 de	 três	 candidatos,	 além	 da porcentagem	de	votos	brancos	e	nulos.	Monte	um	programa	que	receba	como	entrada	o	número	de	votos	de	cada	um	dos	três	candidatos	e	também	os	votos	nulos	e	brancos.	Ao final,	o	programa	deve	apresentar	o	total	de	votos	e	a	porcentagem,	em	relação	a	todos	os	eleitores	que	votaram,	de	votos	de	cada	candidato,	votos	nulos	e	votos	em	branco

console.log("DADOS DAS ELEIÇÕES");

var candidato1 = pegaNumeroInteiro("Votos do Candidato 1: ");
var candidato2 = pegaNumeroInteiro("Votos do candidato 2: ");
var candidato3 = pegaNumeroInteiro("Votos do candidato 3: ");
var votosNulos = pegaNumeroInteiro("Votos nulos: ");
var votosBrancos = pegaNumeroInteiro("Votos brancos: ");

var totalVotos = candidato1 + candidato2 + candidato3 + votosNulos + votosBrancos;

var porcentagemCand1 = (candidato1*100/totalVotos);
var porcentagemCand2 = (candidato2*100/totalVotos);
var porcentagemCand3 = (candidato3*100/totalVotos);
var porcentagemNulos = (votosNulos*100/totalVotos);
var porcentagemBrancos = (votosBrancos*100/totalVotos);

console.clear();
console.log("DADOS DAS ELEIÇÕES");
console.log("Total de votos: "+totalVotos);
console.log("Candidato 1: "+porcentagemCand1.toFixed(2)+"%");
console.log("Candidato 2: "+porcentagemCand2.toFixed(2)+"%");
console.log("Candidato 3: "+porcentagemCand3.toFixed(2)+"%");
console.log("Nulos: "+porcentagemNulos.toFixed(2)+"%");
console.log("Brancos: "+porcentagemBrancos.toFixed(2)+"%");

function pegaNumeroInteiro(str){
  do {
    n = parseInt(prompt(str));
  }
  while (!Number.isInteger(n));
  return n;
}