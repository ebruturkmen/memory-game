let firstPlayerImg = localStorage.getItem("first_player_img");
let secondPlayerImg = localStorage.getItem("second_player_img");
let firstPlayerName = localStorage.getItem("first_player_name");
let secondPlayerName = localStorage.getItem("second_player_name");
if (firstPlayerImg) {
    document.querySelector('#player1-box img[src="' + firstPlayerImg + '"]').classList.add("active");
}
if (secondPlayerImg) {
    document.querySelector('#player2-box img[src="' + secondPlayerImg + '"]').classList.add("active");
}

if (firstPlayerName) {
    document.querySelector('#firstPlayerName').value = firstPlayerName;
}

if (secondPlayerName) {
    document.querySelector('#secondPlayerName').value = secondPlayerName;
}

function selectCharacter(photo) {
    localStorage.setItem("first_player_img", photo.getAttribute("src"));
    let lastActiveEl = document.querySelector("#player1-box .player-box img.active");
    if (lastActiveEl) {
        lastActiveEl.classList.remove("active");
    }
    photo.classList.add("active");
}

function selectCharacterSecond(photo) {
    localStorage.setItem("second_player_img", photo.getAttribute("src"));
    let lastActiveEl = document.querySelector("#player2-box .player-box img.active");
    if (lastActiveEl) {
        lastActiveEl.classList.remove("active");
    }
    photo.classList.add("active");
}

function firstCharacterName() {
    let firstCharacterName =  document.getElementById("firstPlayerName").value;
    localStorage.setItem("first_player_name", firstCharacterName);
}

function secondCharacterName() {
    let secondCharacterName =  document.getElementById("secondPlayerName").value;
    localStorage.setItem("second_player_name", secondCharacterName);
}

function playerName() {
    firstCharacterName();
    secondCharacterName();
}

