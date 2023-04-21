let singleGameSection = document.getElementById("singleGame");
// level one
if(singleGameSection.classList.contains("gameLevelOne")) {
    game(4);
}
// level two
if(singleGameSection.classList.contains("gameLevelTwo")) {
    game(6);
}
// level three
if(singleGameSection.classList.contains("gameLevelThree")) {
    game(9);
}