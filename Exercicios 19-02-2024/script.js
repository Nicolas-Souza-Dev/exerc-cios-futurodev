// Exercício 1

// function helloWorld () {
//     console.log("Hello World!")
// }

// helloWorld()

// Exercicio 2

// let idade = prompt("Qual a sua idade?")

// console.log(idade)


// // Exercício 3 

// let nome = prompt("Qual seu primeiro nome?");
// let sobrenome = prompt("Qual seu sobrenome?");

// console.log(`Seu nome completo é ${nome} ${sobrenome}`);

// Exercício 4

// function somar (num1, num2) {

//     let soma = num1 + num2
//     console.log(soma)

// }

// somar(5, 10)

// Exercício 5 

// let number = -10;

// if (number > 0) {
//     console.log("Esse número é positivo!")
// } else if (number < 0) {
//     console.log("Esse número é negativo!")
// } else {
//     console.log("Esse numero é zero!")
// }

// Exercício 6 

// let objeto1 = {Nome: "Nicolas", Idade: "21 anos", Nacionalidade: "Brasileiro", Profissão: "Vendedor"};
// let objeto2 = {Nome: "Giovana", Idade: "25 anos", Nacionalidade: "Mexicana", Profissão: "Analista de Marketing"};
// let objeto3 = {Nome: "Thalles", Idade: "20 anos", Nacionalidade: "Brasileiro", Profissão: "Analista de desenvolvimento Web"};

// console.log(objeto1, objeto2, objeto3)

// Exercício 7

// function horaDoDia() {

//     const hora = prompt("Que horas são agora?")

//     if (hora > 5 && hora < 12) {
//         console.log("Bom dia!")
//     } else if (hora >= 12 && hora < 19) {
//         console.log("Boa tarde!")
//     } else {
//         console.log("Boa noite!")
//     }
// }

// horaDoDia()

//Exercício 8 

// function parImpar() {
//     let number = prompt("Digite um numero aleatório:")

//     if (number % 2 == 0) {
//         console.log("Esse número é par!")
//     } else {
//         console.log("Esse número é ímpar!")
//     }
// }

// parImpar()

// Exercício 9

// let nota = Number(prompt("De 1 a 5, qual sua nota para o curso FuturoDev?"));

// switch (nota) {
//     case 1: "1";
//     console.log("Odiei o curso!")
//     break;

//     case 2: "2";
//     console.log("Não gostei do curso!")
//     break;

//     case 3: "3";
//     console.log("Gostei um pouco do curso!")
//     break;

//     case 4: "4";
//     console.log("Gostei do curso!")
//     break;

//     case 5: "5";
//     console.log("Amei o curso!")
//     break;

//     default:
//         console.log("Opção inválida!")

// }


// Exercicio 10

function maiorIdade() {

    let idade = Number(prompt("Qual a sua idade?"));

    if (idade < 18) {
        alert("Você é menor de idade!")
    } else {
        alert("Você é maior dde idade!")
    }
}

maiorIdade()






