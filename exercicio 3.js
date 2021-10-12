//Elabore	um	programa	que	receba	a	nota	de	um	aluno	e	diga	se	o	mesmo	foi	aprovado	ou	reprovado.	O	aluno	é	aprovado	com	nova	maior	ou	igual	a	6,0	(seis)

console.log("BOLETIM")
var nota = prompt("Nota: ");
if (nota >= 6.0){
  console.log("Aprovado");
}
else {
  console.log("Reprovado");
}