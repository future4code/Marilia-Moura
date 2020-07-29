// Interpretação de código 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

/* resposta: a.false
 
Falso porque foi utilizado o operador E, que retorna o valor se, e somente se, os booleanos envolvidos
também forem o mesmo valor.

*/

// resultado = bool1 && bool2 && bool3
// console.log("b.", resultado)

/* resposta: b. false

Ocorre o mesmo que a questão anterior, existem dois valores true e um false, neste caso retorna false.
    
*/

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

/* resposta: c. true
 
Penso que seja porque o operador OU dá o valor true e o E também confirma, 
 uma vez que também temos o (!).

 */

// console.log("e.", typeof resultado)

/* resposta: boolean

 */

// Interpretação de código 2

// let array
// console.log("a.", array)

/* resposta: undefined

não foi atribuido nenhum valor á vareável 
 
*/

// array = null
// console.log('b. ', array)

/* resposta: null

basicamente aconteceu o mesmo na questão anterior.

 */

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

/* resposta: 11

Usamos .length para descobrir o tamanho da lista,
a quantidade de elementos.

 */

// let i = 0
// console.log('d. ', array[i])

/* resposta: 3
    
Ele excluiu o número 3, por estar na posição [0]

 */

// array[i + 1] = 19
// console.log('e. ', array)

/* resposta: (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 
Excluiu o 4, [i+1] e adiciou o 19 como novo valor.

*/

// const valor = array[i + 6]
// console.log('f. ', valor)

/*
o valor que está na posição [6]
*/

//  Exercícios de escrita de código - 1

// const idade = prompt("Qual é a sua idade?")
// const idadeMelhorAmiga = prompt("Qual é a idade da sua melhor amiga?")

// let resposta = (idade) > (idadeMelhorAmiga)
// let diferenca = Number(idade) - Number(idadeMelhorAmiga)
// console.log("Sua idade é maior do que a da sua melhor amiga? " + resposta)
// console.log("diferença de idade" + "", diferenca)

// Exercícios de escrita - 2

// const par = prompt("Digite um número par")
// let numeroPar = Number(par)
// console.log(par % 2)

/* resposta: c. Todos os números pares divididos por 2, resulta em 0.

   resposta: d. Quando insere um número ímpar, ele retorna número 1.

*/

// Exercícios de escrita - 3

let listaDeTarefas = []
const tarefa1 = prompt("Primeira tarefa?")
const tarefa2 = prompt("Segunda Tarefa?")
const tarefa3 = prompt("Terceira tarefa?");

[...]