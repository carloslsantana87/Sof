var veF, nGrande, texTo; 
var siNal = Symbol('Alerta');

console.log(`

EXIBIÇÃO DE VARIÁVEIS AINDA INDEFINIDAS!!!

`);

console.log(`A variável recebeu o valor ${veF}, logo é do tipo ${typeof(veF)}!`);
console.log(`A variável recebeu o valor ${nGrande}, logo é do tipo ${typeof(nGrande)}!`);
console.log(`A variável recebeu o valor ${texTo}, logo é do tipo ${typeof(texTo)}!`);
console.log(`A variável recebeu o valor ${siNal.description}, por condição o seu tipo (symbol) deve ter um valor atribuído. Portanto, ela não pode ser indefinida!`);

veF = null;
nGrande  = null;
texTo  = null;


console.log(`

EXIBIÇÃO DE VARIÁVEIS DEPOIS DE RECEBER VALORES NULOS!!!

`);

console.log(`A variável recebeu o valor ${veF}, logo é do tipo ${veF}!`);
console.log(`A variável recebeu o valor ${nGrande}, logo é do tipo ${nGrande}!`);
console.log(`A variável recebeu o valor ${texTo}, logo é do tipo ${texTo}!`);
console.log(`A variável recebeu o valor ${siNal.description}, por condição o seu tipo (symbol) deve ter um valor atribuído. Portanto, ela não pode ser nula!`);


veF = true;
nGrande  = 8978798789789748847763663777377388377662626536638838748847884784n;
texTo  = 'Carlos Luiz de Santana';



console.log(`


EXIBIÇÃO DO TIPO DA VARIAVEL DEPOIS DE RECEBER UM VALOR!!!

             `);

console.log(`A variável recebeu o valor ${veF}, logo é do tipo ${typeof(veF)}`);
console.log(`A variável recebeu o valor ${nGrande}, logo é do tipo ${typeof(nGrande)}`);
console.log(`A variável recebeu o valor ${texTo}, logo é do tipo ${typeof(texTo)}`);
console.log(`A variável recebeu o valor ${siNal.description}, logo é do tipo ${typeof(siNal)}`);



