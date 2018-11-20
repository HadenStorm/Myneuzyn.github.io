var distancia;
//Mudando a vista para o ponto inicial
var mymap = L.map('mapid').setView([0, 0], 2);
//Camada de imagens
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibXluZXV6eW4iLCJhIjoiY2pvZTVqMG1rMWJqbTN3cndneW1xdmxzcCJ9.-Cr7txXr8LHGdEAVAIy6Tg'
}).addTo(mymap);

//conferindo a permissão
navigator.geolocation.getCurrentPosition(mostrarPosicao,liberaAe)

//liberado
function mostrarPosicao(pos){

	var lat1 = pos.coords.latitude;
	var lon1 = pos.coords.longitude;
	mymap.setView([lat1, lon1], 13);//mostrando a posição inicial

	var myIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [95, 95],
    iconAnchor: [33, 63],
    popupAnchor: [-3, -76],
    shadowUrl: 'sombra.png',
    shadowSize: [68, 95],
    shadowAnchor: [15, 45]
	});

	var marker = L.marker([lat1, lon1], {icon: myIcon}).addTo(mymap);

	marker.bindPopup("<b>Você está aqui!").openPopup();//pop-up pro marcador
	console.log(lat1,lon1)

	document.getElementById('ir').addEventListener("click",seguir);//evento pro botao

	function seguir() {

		var lat2 = document.getElementById('latitude').value;//pega os valores inseridos
		var lon2 = document.getElementById('longitude').value;

		lat2 = lat2.replace(",","."); //troca a virgula por ponto
		lon2 = lon2.replace(",",".");

		console.log(lat2,lon2);

		mymap.setView([lat2, lon2], 13); //muda a vista 

		var haversine = function(lat1, lon1, lat2, lon2) { //formula para achar a distancia
        var deg2rad = 0.017453292519943295; 
        var cos = Math.cos;
        lat1 *= deg2rad;
        lon1 *= deg2rad;
        lat2 *= deg2rad;
        lon2 *= deg2rad;
        var diam = 12742; 
        var dLat = lat2 - lat1;
        var dLon = lon2 - lon1;
        var a = ( (1 - cos(dLat)) +
                (1 - cos(dLon)) * cos(lat1) * cos(lat2)
        ) / 2;

        distancia =  (diam * Math.asin(Math.sqrt(a))).toFixed(3);

        document.getElementById("dis").innerHTML = distancia;

    	};

    	haversine(lat1,lon1,lat2,lon2);

    	var myIcon = L.icon({
	    iconUrl: 'marker.png',
	    iconSize: [95, 95],
	    iconAnchor: [33, 63],
	    popupAnchor: [-3, -76],
	    shadowUrl: 'sombra.png',
	    shadowSize: [68, 95],
	    shadowAnchor: [15, 45]
		});

		var marker = L.marker([lat2, lon2], {icon: myIcon}).addTo(mymap);
		marker.bindPopup("Este é o lugar que você marcou! <br> Distância: " + distancia + " Km." ).openPopup();//criando marcador pro ponto inserido

	    var polygon = L.polygon([//criando a reta
		    [lat1, lon1],
		    [lat2, lon2],
		]).addTo(mymap);

	}

}


//Localização bloqueada
function liberaAe(){alert("Libere a Localização.")}
