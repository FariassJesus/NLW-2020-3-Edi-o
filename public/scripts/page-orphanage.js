const options = {//Variável que será utilizada para deixar o mapa imóvel desabilitando suas funções
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//VARIÁVEL ACIMA
const map = L.map("mapid", options).setView([-23.5839487, -46.6880432], 15);

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



//Create and add marker
L.marker([-23.5839487, -46.6880432], { icon })
.addTo(map)


//Image gallery

function selectImage(event) {
    const button = event.currentTarget


    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove("active")
    } 

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de images
    imageContainer.src = image.src
    //adicionar a classe .active para o botão
    button.classList.add('active')
}