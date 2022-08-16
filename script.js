// // //PRATICA GUIADA 1:Quando digitar o numero 0, devemos para de solicitar novos inputs e imprimir no console o valor de todos os numeros indicados.

let numero = Number(prompt("digite um numero para somar ou 0 para sair")) //inicialização da variavel

let soma=0
while (numero!==0){ //condição de continuação
    soma=soma+numero // um conjunto de auterações 
    console.log(soma);
    console.log(numero);
    numero = Number(prompt("digite um numero para somar ou 0 para sair")) //uma alteração (no while somos obrigados a finalizar)

}
console.log(soma);

// // //PRATICA GUIADA 2 esse programa deve escrever os numeros 0 ate o valor que foi digitado pela pessoa.

 const numero2 = +prompt ("digite um numero")
 for (let i=0 ; i<=numero2; i=i=1){ // no for ele finaliza aqui // um laço for que roda x vezes onde x é o valor digitado.
     console.log(i)
 }

//PRATICA GUIADA3 criar uma array com 7 numeros e usar o for para percorrer os indices deste array, imprimindo no console a cada linha

const listaDeNumero =[2,4,6,8,10,12,14]

for (let i=0; i<listaDeNumero.length;i++){
    console.log(`O número do indice ${i} é ${listaDeNumero[i]}`);

}


// EXERCICIO DE FIXAÇÃO 1 

let usuario =prompt("qual seu tipo de usuario :A = administrador,B = Usuario Comum C = Usuario assinante").toUpperCase()

while (usuario !== "A"){//Quando o valor for diferente da letra A o laço deve se repetir mostrando "acesso negado"
    alert("Acesso Negado!");
    
    usuario==prompt("qual seu tipo de usuario :A = administrador,B = Usuario Comum C = Usuario assinante") // quando o valor for igual a A o laço deve parar e mostrar "bem vindo ADM"
    alert ("Bem vindo ADM")
    
}

// EXERCICIO DE FIXAÇÃO 2 tabuada do 2

let num = 0
for (let i=1; i<=10; i++){
    console.log(2*i)
}

//EXERCICIO DE FIXAÇÃO 3

let lista = ["Matheus","Naianna","Joana"]

for (n = 0; n <lista.length; n++)
 {
    console.log(lista[n].toUpperCase())
}
   
 