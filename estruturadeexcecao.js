const prompt = require('prompt-sync')();
var numerador, denominador, resultado;

console.log(`SITUAÇÃO MATEMÁTICA NA QUAL VERIFICA SE A DIVISÃO PODE SER REALIZADA OU NÃO!!!`);

numerador = parseFloat(prompt("Digite o número do NUMERADOR!!!"));
denominador = parseFloat(prompt("Digite número do DENOMINADOR!!!"));

try {    
    if (denominador !== 0)  {
       resultado = numerador / denominador;
       console.log (`O resultado da Divsão é ${resultado}`);
    } else {        
    throw new Error ("O numero 0 foi digitado no denominador!");
    }
}
catch(error) {
    console.log("Ocorreu um erro no cálculo!"); 
    console.log('Pela difinição e regra da matemática é impossível dividir um número por zero!!!! ' + error);  
} 
finally{
    console.log("Cálculo verificado!!!");
}


