//Escalar jogador
function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm("Escalar " + name + " como " + position + " ?");

  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = "player- " + number;
    playerItem.innerText = position + ": " + name + " (" + number + " )";
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

//Remover jogador
function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player- " + number);
  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + " ?"
  );

  if (confirmation) {
    // Poderia remover dessa forma tbm, deireto no elemento e
    //playerToRemove.remove()
    document.getElementById("teamList").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}

function updateContainerHeight() {
  var container = document.querySelector(".container");
  var height = (container.style.minHeight = height + "px");
}
