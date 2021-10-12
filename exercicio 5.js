//Escreva	um	algoritmo	para	ler	uma	temperatura	em	graus	Fahrenheit,	calcular	e	escrever o	valor	correspondente	em	graus	Celsius.

var fahrenheit, celsius;

menu();

function menu(){
  while (true){
    console.log("===CONVERSÃO DE TEMPERATURAS===\n1. Fahrenheit para Celsius \n2. Celsius para Fahrenheit \n3. Sair");
    opcao = pegarNumero("Opção: ", 1, 3);
    if (opcao == 1){
      paraCelsius()
    }
    else if (opcao == 2){
      paraFahrenheit();
    }
    else
    {
      console.log("Fechando...");
      break;
    }
  }
}

function pegarNumero(str, min, max){
  do {
    do {
      n = parseInt(prompt(str));
    }
    while (min > n || n > max);
  }
  while (!Number.isInteger(n));
  return n;
}

function paraCelsius(){
    fahrenheit = prompt("Temperatura em Fahrenheit: ");
    celsius = (fahrenheit - 32) / 1.8;
    console.log(fahrenheit+"ºF = "+celsius.toFixed(1)+"ºC\n");
}

function paraFahrenheit(){
  celsius = prompt("Temperatura em Celsius: ");
  fahrenheit = (celsius*1.8)+32;
  console.log(celsius+"ºC = "+fahrenheit.toFixed(1)+"ºF\n");
}