//Escreva	um	programa	para	que	sejam	informados	10	(dez)	números	inteiros.	O	programa	deve	informar	o	menor	e	o	maior	valor	informado.

var vetor = [];
var maior = 0
var menor;

for (var i = 0; i < 10; i++){
  vetor[i] = pegaNumeroInteiro((i+1)+"º número: ");
}
console.clear();

process.stdout.write("Vetor: ");
for (var i = 0; i < 10; i++){
  process.stdout.write(vetor[i]+" ");
}

for (var i = 0; i < 10; i++){
  if ((vetor[i] < menor) || i == 0){
    menor = vetor[i]
  }
  if (vetor[i] > maior){
    maior = vetor[i];
  }
}

console.log("\nMaior número digitado: "+maior);
console.log("Menor número digitado: "+menor);




function pegaNumeroInteiro(str){
  do {
    n = parseInt(prompt(str));
  }
  while (!Number.isInteger(n));
  return n;
}