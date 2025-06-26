function squirtle() {

    document.getElementById("pokemon-name").innerHTML = "Squirtle";
    document.getElementById("pokemon-type").innerHTML = "Tipo: Água";
    document.getElementById("pokemon-img").src = "images/squirtle.png";
    document.getElementById("attacks-list").innerHTML = "<li>Jato d'Água</li><li>Investida</li><li>Giro Rápido</li>";
    document.getElementById("btn-pokemon-2").button = "blue";
    document.getElementById("pokemon-card").style.backgroundColor = "blue";
}

function charmander() {

    document.getElementById("pokemon-name").innerHTML = "Charmander";
    document.getElementById("pokemon-type").innerHTML = "Tipo: Fogo";
    document.getElementById("pokemon-img").src = "images/charmander.png";
    document.getElementById("btn-pokemon-2").button = "red";
    document.getElementById("attacks-list").innerHTML = "<li>Chama</li><li>Arranhão</li><li>Golpe de Cauda</li>";
    document.getElementById("pokemon-card").style.backgroundColor = "red";
}
function goToHome() {
    
    window.location.href = 'index.html'; // Substitua 'index.html' pelo caminho correto, se necessário
}
