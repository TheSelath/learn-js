//Fundamentos

//// Declaração de Variaveis

var varTeste = "Hello World";
let letTeste = "Hello World";
const constTeste = "Hello World";

//// Impressão das Variaveis no console

console.log(varTeste);
console.log(letTeste);
console.log(constTeste);

//// Operações Aritimeticas

const numberOne = 1;
const numberTwo = 2;
const numberThree = 3;
const numberFor = 4;

////// Soma

let soma = numberOne + numberThree;
console.log(soma)

////// Subtração

let sub = numberThree - numberFor;
console.log(sub);

////// Multiplicação

let mult = numberTwo * numberTwo;
console.log(mult);

////// Divisão

let divs = numberFor / numberTwo;
console.log(divs);

//// Operadores de Comparação e Diferença 

////// Atribuição 

const atrib1 = 10;
const atrib2 = 15;
const atrib3 = "15";
const atrib4 = "15";
const atrib5 = 10;

////// Comparação valor

console.log(atrib1 == atrib2); // 10 == 15
console.log(atrib2 == atrib3); // 15 == "15"
console.log(atrib1 > atrib2); // 10 > 15
console.log(atrib1 < atrib2); // 10 < 15
console.log(atrib1 >= atrib2); // 10 >= 15
console.log(atrib1 <= atrib2); // 10 <= 15

////// Comparação de tipo e valor

console.log(atrib3 === atrib4); // "15" === "15"
console.log(atrib1 === atrib5); // 10 === 10

////// Diferença de valor 

console.log(atrib1 != atrib2); // 10 != 15
console.log(atrib1 != atrib5); // 10 != 10

////// Diferença de tipo e valor 

console.log(atrib1 !== atrib5); // 10 !== 10
console.log(atrib1 !== atrib4); // 10 !== "15"

//// Operadores Logicos

////// Não/Not
let trueOrFalse = true;
console.log(!trueOrFalse); //false

////// Ou/OR

console.log(atrib1 > atrib5 || atrib1 < atrib3); // 10 > 10 false ou 10 < "15" True

////// E/AND

console.log(atrib1 > atrib5 && atrib1 < atrib3); // 10 > 10 e 10 < "15" false

//Esturutras de Condição

////Estrutura Condicional - if, else, else if

let idade = 25;
if(idade < 1){
    console.log("Recem Nascido");
}else if(idade >= 1 && idade < 12){
    console.log("Cirança");
}else if(idade >= 12 && idade < 18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
}

////Estrutura Condicional Switch case

let genero = "M"
switch(genero){
    case "F":
        console.log("Feminino");
        break;
    case "M":
        console.log("Masculino");
        break;
    default:
        console.log("Genero não Encontrado");
        break;
}

// Estutura de Repetição

//// Estrutura FOR (contador, condição, incremento) / for(i = 0; i < 10; i++)

let number = 10;
for(let i = 0; i < number; i++){
    console.log(i); 
}

//// Estrutura FOR IN

let objeto = {
    nome: 'teste',
    idade: '15',
    genero: 'F' 
}

for (item in objeto){
    console.log(item);
} //retorna o item

for (item in objeto){
    console.log(objeto[item]);
}//retorna o valor do item

for (item in objeto){
    console.log(item + ': ' + objeto[item]);
}//retorna o objeto

//// Esturutra FOR OF

let nomes = ["Joao", "Maria", "Jorge"]

for(let nome of nomes){
    console.log(nome);
}

//// Estrutura While

let k = 0;
while(i < number){
    console.log(k);
    k++;
}

//// Estrutura Do While 

let j = 0

do{
    console.log(j);
    j++;
}while(j < number);

// Funções

/* esturura de uma função 
    function nomeDaFunção(arg1, arg2){
        console.log("Hello World");
    }
*/
init("Jorge"); //hoisting, permite a execução de uma função antes da sua criação - funciona em JS

function init(name){
    console.log("Welcome" + name);
}

//// arrow function

const arrowFuncion = (name) => console.log("Welcome + name");

arrowFuncion("João");







