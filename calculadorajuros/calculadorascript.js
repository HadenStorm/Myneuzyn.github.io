//variaveis
var capital;
var juros;
var tempo;
var cont;
var botao;
//evento
function inic(){
	botao = document.getElementById("botao");//Atribui o ELEMENTO button (com o id botao), para o objeto (var) botao
	botao.addEventListener("click",calcula);//Escuta o evento de click sobre o objeto botão, e chama a função calcula
}

function calcula(){

 	var x = document.getElementById('resultado');//pega a div do resultado
 	x.innerHTML = " ";//apaga tudo q tem

	capital = document.getElementById("cap1").value;//pega o valor do input
	juros = document.getElementById("juro").value;
	tempo = document.getElementById("meses").value;

	capital = capital.replace(",",".");//troca as virgula por pontos
	juros = juros.replace(",",".");
	tempo =tempo.replace(",",".");



	if(isNaN(capital) || isNaN(juros) || isNaN(tempo)){ //testa se é um numero
 		x.innerHTML = " Os dados inseridos são inválidos!";
 		document.getElementById("cap1").value = '';//zera os campos
 		document.getElementById("juro").value = '';
 		document.getElementById("meses").value = '';	
	}
	else{
		for(cont=1;cont<=tempo;cont++){	

		var total = (capital * Math.pow(1+(juros/100),cont)).toFixed(2); //calculo 
		var difer = (total - capital).toFixed(2); // calculo dos juros

		console.log(total)

		var p = document.createElement("p"); //cria paragrafo
		var result = document.createTextNode("Capital no " + cont + "° mês: " + total + " Juros: " + difer);//cria o texto para atribur ao paragrafo
		p.appendChild(result);//atribui o texto ao paragrafo
		document.getElementById("resultado").appendChild(p);// atriubui o paragrafo (com o texto), a div de resultado		
		}
	}

}





inic();//executa a função inicial