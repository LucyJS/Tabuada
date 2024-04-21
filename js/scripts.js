
/**
 * Script para gerar o comportamente de gerar tabuada(calculo e impressão na tela)
 */

// variavel (campoNumero) para armazenar numero digitado no tag html reservado para o numero
var campoNumero = document.getElementById("numero");

// elemento html para colocar o resultado dos calculos da tabuada
var resultadoTabuada = document.getElementById("resultado");

// botões Multiplicar/ Dividir/ somar/ Subtrair
var botaoMultiplicar = document.getElementById("botaoMultiplicar");
var botaoDividir = document.getElementById("botaoDividir");
var botaoSomar= document.getElementById("botaoSomar");
var botaoSubtrair = document.getElementById("botaoSubtrair");

// escutar evento de clique no botão para executar um script
botaoMultiplicar.addEventListener("click", montarTabuadaMultiplicacao);
botaoDividir.addEventListener("click", montarTabuadaDivisao);
botaoSomar.addEventListener("click", montarTabuadaSoma);
botaoSubtrair.addEventListener("click", montarTabuadaSubtracao);

// função para montar a tabuada de Multiplicação
function montarTabuadaMultiplicacao(){

    // o valor que vem do campo é texto (variavel do tipo string) no javascript
    var numeroText = campoNumero.value; 
    // console.log(typeof numeroText); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
    // converter o texto para número inteiro
    var numero = parseInt(numeroText);
    // console.log(typeof numero); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
    var htmlResultado = "";
    htmlResultado = htmlResultado + "Tabuada do " + numero + " de Multiplicação!" + "<ul>";
    // contar do número 0 até o número 
    for (var contador = 1; contador <= 10; contador++){

        // resultado da conta
        var total = (numero * contador);

        // gerar html para representar o calculo de um número especifico 
        var htmlCalculoNumero = ("<li>" + numero + " x " + contador  +  " = " + total + "</li>");

        // adicionar o html gerado no final do html de resultado da tabuada
        htmlResultado = htmlResultado + htmlCalculoNumero;
    }
    htmlResultado = htmlResultado + "</ul>";

    resultadoTabuada.innerHTML = htmlResultado;
}


// função para montar a tabuada de Divisão
function montarTabuadaDivisao(){
    
        // o valor que vem do campo é texto (variavel do tipo string) no javascript
        var numeroText = campoNumero.value; 
        // console.log(typeof numeroText); // descomente essa linha para ver o tipo de variavel no CONSOLE
        
        // converter o texto para número inteiro
        var numero = parseInt(numeroText);
        // console.log(typeof numero); // descomente essa linha para ver o tipo de variavel no CONSOLE
        
        var htmlResultado = "";
        htmlResultado = htmlResultado + "Tabuada do " + numero + " de Divisão!" + "<ul>";

        var numeroDividendo = numero;

        // contar do número 1 até o número 
        for (var contador = 1; contador <= 10; contador++){
    
            // resultado da conta
            var total = (numeroDividendo / numero);
           // var resto = (numeroDividendo % contador);
           // if(resto == 0){
                // gerar html para representar o calculo de um número especifico 
                
                if (numero == 0) {
                    contador = 10;
                    var htmlCalculoNumero = ("<li> Não há divisão por " + numero + ". Pois o resultado será infinito! </li>");
                } else {
                    var htmlCalculoNumero = ("<li>" + numeroDividendo + " / " + numero  +  " = " + total + "</li>");
                }
                         
                
           // adicionar o html gerado no final do html de resultado da tabuada
            htmlResultado = htmlResultado + htmlCalculoNumero;
        //  }
           numeroDividendo = numeroDividendo + numero;      
        }
    
        htmlResultado = htmlResultado + "</ul>";
    
        resultadoTabuada.innerHTML = htmlResultado;
    }

    
     // função para montar a tabuada de Adição
function montarTabuadaSoma(){
    
     // o valor que vem do campo é texto (variavel do tipo string) no javascript
     var numeroText = campoNumero.value;
     // console.log(typeof numeroText); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
     // converter o texto para número inteiro
     var numero = parseInt(numeroText);
     // console.log(typeof numero); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
     var htmlResultado = "";
     htmlResultado = htmlResultado + "Tabuada do " + numero + " de Adição!" + "<ul>";
  
      // contar do número 1 até o número
     for (var contador = 1; contador <= 10; contador++){
  
         // resultado da conta
         var total = (numero + contador);
      
             // gerar html para representar o calculo de um número especifico
             var htmlCalculoNumero = ("<li>" + numero + " + " + contador  +  " = " + total + "</li>");
                     
        // adicionar o html gerado no final do html de resultado da tabuada
         htmlResultado = htmlResultado + htmlCalculoNumero;
      
     }
     htmlResultado = htmlResultado + "</ul>";
  
     resultadoTabuada.innerHTML = htmlResultado;
  }
  
  
       // função para montar a tabuada de Subtração
function montarTabuadaSubtracao(){
    
     // o valor que vem do campo é texto (variavel do tipo string) no javascript
     var numeroText = campoNumero.value;
     // console.log(typeof numeroText); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
     // converter o texto para número inteiro
     var numero = parseInt(numeroText);
     // console.log(typeof numero); // descomente essa linha para ver o tipo de variavel no CONSOLE
    
     var htmlResultado = "";
     htmlResultado = htmlResultado + "Tabuada do " + numero + " de Subtração!" + "<ul>";
  
     var numeroMinuendo = numero;

      // contar do número 1 até o número
     for (var contador = 1; contador <= 10; contador++){
  
         // resultado da conta
         var total = numeroMinuendo - numero;
      
             // gerar html para representar o calculo de um número especifico
             var htmlCalculoNumero = ("<li>" + numeroMinuendo + " - " + numero  +  " = " + total + "</li>");
                     
        // adicionar o html gerado no final do html de resultado da tabuada
         htmlResultado = htmlResultado + htmlCalculoNumero;

         numeroMinuendo = numeroMinuendo + 1;   
     }
     htmlResultado = htmlResultado + "</ul>";
  
     resultadoTabuada.innerHTML = htmlResultado;
  }

