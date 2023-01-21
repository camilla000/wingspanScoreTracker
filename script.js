function updateScore(amount, playerId) {
  var playerScore = document.getElementById(playerId);
  playerScore.innerHTML = parseInt(playerScore.innerHTML) + amount;
}

function updateGames(amount, playerId) {
  var playerGames = document.getElementById(playerId);
  playerGames.innerHTML = parseInt(playerGames.innerHTML) + amount;
}

function putDataIntoDom() {

  let data = {
    name: "Camilla",
    games: 0,
    victories: 0
  };

  let table = document.getElementById('score-table');

  let tr = document.createElement('tr');
  let tdName = document.createElement('td');
  let tdGames = document.createElement('td');
  let tdVictories = document.createElement('td');

  let playerGamesId = data.name + "-games";
  let playerVictoriesId = data.name + "-victories";

  tdName.innerText = data.name;
  tdGames.innerHTML = `<button class='minus' onclick="updateGames(-1, '${playerGamesId}')">-</button> <span id='${playerGamesId}'>0</span> <button class='plus' onclick="updateGames(1, '${playerGamesId}')">+</button>`;
  tdVictories.innerHTML = `<button class='minus' onclick="updateGames(-1, '${playerVictoriesId}')">-</button> <span id='${playerVictoriesId}'>0</span> <button class='plus' onclick="updateGames(1, '${playerVictoriesId}')">+</button>`;

  tr.appendChild(tdName);
  tr.appendChild(tdGames);
  tr.appendChild(tdVictories);

  table.appendChild(tr);
}
