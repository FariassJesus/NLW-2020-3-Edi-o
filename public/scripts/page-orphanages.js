// Tipos de dados
// String ""
// Number 123
// Object {}
// Boolean true or false
// Array [] Coleção de valores [Mouse (0), Teclado (1), Monitor (2)]

//Create map
const map = L.map("mapid").setView([-23.5839487, -46.6880432], 15);

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
//Aqui ele está buscando o mapa (tileLayer) e adicionando a variável "map"

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//Create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>'
);

//Create and add marker
L.marker([-23.5839487, -46.6880432], { icon }).addTo(map).bindPopup(popup);
//O ";" é usado apenas no fim do mapa
//L.marker está criando a marcação
//.addTo está adicionando o mapa
//.bindpopup ligando ao popup para
//.openPopup está abrindo o popup
