function updateScore(amount, playerId) {
  var playerScore = document.getElementById(playerId);
  playerScore.innerHTML = parseInt(playerScore.innerHTML) + amount;
}
function updateGames(amount, playerId) {
  var playerGames = document.getElementById(playerId);
  playerGames.innerHTML = parseInt(playerGames.innerHTML) + amount;
}
