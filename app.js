
alert("Boas Vindas ao Jogo do Número Secreto!");
let numeroMaximo = 5000; 
// Sempre colocar uma váriavel com nome claro, para que, quem olhar o código entenda. 
let numeroSecreto = parseInt (Math.random () * numeroMaximo + 1);
console.log (numeroSecreto);
let tentativa; 
let experimento = 1; 
//let tentativa = prompt ("Escolha um número entre 1 e 100.");


// Apenas no Console. //
// if (tentativa == numeroSecreto) {
// console.log(`Você descobriu o número secreto!!! ${numeroSecreto}`); // bloco de código a ser executado caso a tentativa do usuário seja igual ao número secreto.
// } else { 
//  alert ("Poxa. Você errou."); // bloco de código a ser executado caso a tentativa do usuário seja diferente ao número secreto.
// } 
//////////////////////////////


while (tentativa != numeroSecreto) {
        tentativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    if (tentativa == numeroSecreto) {
        break; 
    } else { 
        if (tentativa > numeroSecreto){
            alert (`O número secreto é menor que ${tentativa}`);
        } else {
            alert (`O número secreto é maior que ${tentativa}`);

        }
       // experimento = experimento + 1;
        experimento ++;
        //alert ("Poxa. Você errou.") // bloco de código a ser executado caso a tentativa do usuário seja diferente ao número secreto.
} }

let palavraTentativa = experimento > 1 ? 'tentativas' : 'tentativa';
alert (`Parabéns! Você descobriu o número secreto, ${numeroSecreto} com ${experimento} ${palavraTentativa} !!!`); 

// if (experimento > 1 ) {
   //  alert (`Parabéns! Você descobriu o número secreto, ${numeroSecreto} na sua ${experimento} tentativas !!!`); // bloco de código a ser executado caso a tentativa do usuário seja igual ao número secreto.
// } else{
   // alert (`Parabéns! Você descobriu o número secreto, ${numeroSecreto} na sua ${experimento} tentativa !!!`); 
// } 