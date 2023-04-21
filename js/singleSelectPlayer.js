let singlePlayerImg = localStorage.getItem("single_player_img");
let singleName = localStorage.getItem("single_player_name");

if (singlePlayerImg) {
    document.querySelector('#singlePlayerBox img[src="' + singlePlayerImg + '"]').classList.add("active");
}

if (singleName) {
    document.querySelector('#singleName').value = singleName;
}

function selectSingleCharacter(photo) {
    localStorage.setItem("single_player_img", photo.getAttribute("src"));
    let lastActiveEl = document.querySelector("#singlePlayerBox .player-box img.active");
    if (lastActiveEl) {
        lastActiveEl.classList.remove("active");
    }
    photo.classList.add("active");
}

function singleCharacterName() {
    let singleCharacterName = document.getElementById("singleName");
    localStorage.setItem("single_player_name", singleCharacterName.value);
}

function singlePlayerName() {
    singleCharacterName();
} 