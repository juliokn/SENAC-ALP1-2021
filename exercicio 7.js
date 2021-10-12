//A	 partir	 do	 ano	 fornecido	 pelo	 usuário	 escrever	 um	 programa	 que	 diga	 se	 o	 ano	 é bissexto

//Para um ano ser bissexto, ele precisa
//1. Ser divisível por 4
//2. Se divisível por 100, deve ser por 400

console.log("ANO BISSEXTO - Avalia se um ano é bissexto. \nPara sair, digite qualquer letra.\n");
while (true){ 
  var ano = parseInt(prompt("Ano: "));
  if (!Number.isInteger(ano)){
    console.log("SAINDO...")
    break;
  }
  else {
    avaliaAno(ano);
  }
}


function avaliaAno(ano){

if (ano%4 == 0){
  if ((ano % 100 == 0) && (ano % 400 != 0)){
    console.log("Não é bissexto.\n");
  }
  else {
    console.log("É bissexto.\n");
  }
}
else {
  console.log("Não é bissexto.\n");
}
}