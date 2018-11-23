//escolha por toque
var pontosH=0;
var pontosPC=0;
var ponto1 = document.getElementById('pontosPC1')
var ponto2 = document.getElementById('pontosH1')
var nome="Jogador";

function inic(){
    nome = prompt("Digite seu Nome:")
    var pedra = document.getElementById('pedra');
    var pepel = document.getElementById('papel');
    var tesoura = document.getElementById('tesoura');
    var pc = document.getElementById('escolhaPC');




    pedra.addEventListener("click",escolhaPedra);
    function escolhaPedra(){
        JogadaHumano = "pedra";
        j2();
        console.log(JogadaHumano);
    }
    papel.addEventListener("click",escolhaPapel);
    function escolhaPapel(){
        JogadaHumano = "papel";
        j2();
        console.log(JogadaHumano);
    }
    tesoura.addEventListener("click",escolhaTesoura);
    function escolhaTesoura(){
        JogadaHumano = "tesoura";
        j2();
        console.log(JogadaHumano);
    }
        //jogada pc

    function j2(){
    var jogadapc = (Math.random()*10 + 1).toFixed(0); //numero aleatorio de 1 a 10
    console.log(jogadapc)

    if (jogadapc < 3.3) {

    jogadapc = "pedra";
    pc.style.backgroundImage = "url('pedraPC.png')";

    } else if(jogadapc <= 6.6) {

    jogadapc = "papel";
    pc.style.backgroundImage = "url('papelPC.png')";

    } else {

    jogadapc = "tesoura";
    pc.style.backgroundImage = "url('tesouraPC.png')";

    } 
    console.log("JogadaPC: " + jogadapc);

    compare(JogadaHumano,jogadapc);
    }
} 

function compare (Jogada1, Jogada2) {

    if (Jogada1 == Jogada2){
    alert("Empate!");    
    console.log ("O resultado é um empate!")
}
    else if (Jogada1 == "pedra") {

        if (Jogada2 == "tesoura"){

        console.log ("pedra vence")
        pontosH++;
        }

        else {

            console.log ("papel vence")
            pontosPC++;

        }

    }

    else if (Jogada1 == "papel") {

        if (Jogada2 == "pedra"){

        console.log ("papel vence")
        pontosH++;
        }

        else {

            console.log ("tesoura vence")
            pontosPC++;

        }

    }

    else if (Jogada1 == "tesoura") {

        if (Jogada2 == "pedra"){

        console.log ("pedra vence")
        pontosPC++;
        }

        else {

            console.log ("tesoura vence")
            pontosH++;

        }    

    }
    pontuacao.innerHTML = nome + ": " + pontosH;
    pontuacao2.innerHTML = "Computador: " + pontosPC;
};

inic();