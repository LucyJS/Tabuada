
/**
 * Script que gerar o comportamente de gerar tabuada
 */

// campo para digitar o número
var campoNumero = document.getElementById("numero");

// elemento html para colocar o resultado dos calculos da tabuada
var resultadoTabuada = document.getElementById("resultado");


// botão de calcular
var botaoCalcular = document.getElementById("botaoCalcular");

// escutar evento de clique no botão para executar um script
botaoCalcular.addEventListener("click", montarTabuada);

// função para montar a tabuada
function montarTabuada(){

    // o valor que vem do campo é texto (variavel do tipo string) no javascript
    var numeroText = campoNumero.value; 
    // console.log(typeof numeroText); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
    // converter o texto para número inteiro
    var numero = parseInt(numeroText);
    // console.log(typeof numero); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
    var htmlResultado = "";
    htmlResultado = htmlResultado + "<ul>";
    // contar do número 1 até o número 
    for (var contador = 1; contador <= 10; contador++){

        // resultado da conta
        var total = (contador * numero);

        // gerar html para representar o calculo de um número especifico 
        var htmlCalculoNumero = ("<li>" + contador + " X " + numero  +  " = " + total + "</li>");

        // adicionar o html gerado no final do html de resultado da tabuada
        htmlResultado = htmlResultado + htmlCalculoNumero;
    }
    htmlResultado = htmlResultado + "</ul>";

    resultadoTabuada.innerHTML = htmlResultado;
}
