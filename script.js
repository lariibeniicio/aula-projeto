1/ const numeros = [2, 4, 6, 8]
let numerosPares = []
numeros.forEach(function (pegacadanumero){
if (pegacadanumero % 2 === 0){
    numerosPares.push (pegacadanumero)
}
})
console.log(numerospares)
 
2/let nomes = ["João", "Maria", "Carlos", "Ana"];
nomes.forEach(function (peganomes){
console.log(`sr(a) ${peganomes}`)
})
 
3//
let numeros =[4, 11, 8, 23, 7, 2,];
contador = 0
numeros.forEach(function (pegaNumeros){
if(pegaNumeros > 10){
contador++
}
})
console.log(contador)
 
5// let nomes = ["ana", "carlos", "maria"];

forEach(function(nome, index) {

    nomes[index] = nome.toUpperCase(); //

});

console.log(nomes); // Saída: ["ANA", "CARLOS", "MARIA"]
 
4//let frase ="mephis depay é brabo ";
let palavras = frase.split(' ')
contador = 0
palavras.forEach(function(pegaPalavras){
    contador++
})
console.log(contador)
 