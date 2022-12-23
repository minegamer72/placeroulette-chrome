chrome.browserAction.onClicked.addListener(function() {
  // Generate a random 9-10 digit number
  var gameId = Math.floor(100000000 + Math.random() * 900000000);

  // Open the game in a new tab
  window.open('https://www.roblox.com/games/' + gameId, '_blank');
});