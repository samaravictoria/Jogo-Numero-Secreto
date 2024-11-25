Jogo do Número Secreto 🎯

Exibe a mensagem de boas-vindas ao jogador
alert("Boas Vindas ao Jogo do Número Secreto!");


Definindo o número secreto (este é o número que o jogador precisa adivinhar)
Neste caso, o número secreto é 29. Este valor pode ser alterado para qualquer outro número entre 1 e 30.
let numeroSecreto = 29; Sempre é bom usar nomes de variáveis claros para facilitar o entendimento do código



Exibindo o número secreto no console (apenas para fins de desenvolvimento)
O console.log é usado aqui para que o desenvolvedor possa verificar o número secreto
console.log(numeroSecreto);


Variável para armazenar a tentativa do jogador
Essa variável vai armazenar o valor inserido pelo jogador a cada tentativa
let tentativa;



Loop para manter o jogo até o jogador acertar o número secreto
O jogo continuará até que a tentativa seja igual ao número secreto
while (tentativa != numeroSecreto) {

    Solicita ao jogador para inserir um número entre 1 e 30
    O prompt() exibe uma caixa de diálogo para o jogador inserir seu palpite
    tentativa = prompt("Escolha um número entre 1 e 30.");

    Verifica se a tentativa do jogador é igual ao número secreto
    Se o jogador acertou, exibe a mensagem de sucesso
    if (tentativa == numeroSecreto) {
        Exibe uma mensagem de sucesso quando o jogador adivinha o número
        alert("Você descobriu o número secreto!!!");
    } else {
        Se a tentativa for maior que o número secreto, informa que o número secreto é menor
        if (tentativa > numeroSecreto) {
            alert(`O número secreto é menor que ${tentativa}`);
        } else {
            Se a tentativa for menor que o número secreto, informa que o número secreto é maior
            alert(`O número secreto é maior que ${tentativa}`);
        }
    }
}



{ 🕹️ Funcionalidades

Escolha de números:
O jogador tenta adivinhar o número secreto, que está dentro de um intervalo pré-definido (por exemplo, entre 1 e 30).

Feedback instantâneo:
O jogo informa se o jogador acertou ou errou, exibindo mensagens de feedback após cada tentativa.

Interface amigável:
Design simples e responsivo, garantindo uma experiência agradável tanto em desktop quanto em dispositivos móveis.

Reinício do jogo:
O jogador pode reiniciar o jogo e tentar novamente, com um novo número secreto gerado a cada partida. } 




{ 🛠️ Tecnologias Utilizadas

HTML:
Estrutura do jogo, com campos de entrada e botões para interação.

CSS:
- Estilização da interface com cores atraentes e um layout responsivo.

JavaScript:
- Lógica principal do jogo, incluindo:
- Geração do número secreto.
- Comparação do número escolhido com o número secreto.
- Exibição dinâmica das mensagens de feedback. } 




{ 🚀 Como Jogar

1. Abra o jogo no navegador.
2. Leia a mensagem inicial e escolha um número dentro do intervalo.
3. Clique no botão "Chutar" (ou forneça a entrada via prompt).
4. Veja se acertou ou tente novamente!
5. Reinicie o jogo caso deseje jogar novamente.

Este é um exemplo de como usar lógica condicional em JavaScript para criar uma experiência interativa e divertida! } 
