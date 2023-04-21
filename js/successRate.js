function successRate(NumofPairCards, moves) {
    document.getElementById("SuccessRate").style.display = "flex";
    let endTextSection = document.getElementById("endText");
    if (moves == NumofPairCards) {
        /* give 5 stars you are perfect! */
        createStarsSection(5);
        endTextSection.innerHTML = "You are Perfect!";
    } else if (moves < (NumofPairCards + 4)) {
        createStarsSection(4);
        endTextSection.innerHTML = "You are so good!";
    } else if (moves < (NumofPairCards + 10)) {
        createStarsSection(3);
        endTextSection.innerHTML = "You are good!";
    } else if (moves < (NumofPairCards + 16)) {
        createStarsSection(2);
        endTextSection.innerHTML = "You are not bad!";
    }
    else {
        createStarsSection(1);
        endTextSection.innerHTML = "try again!";
    }
}

// create stars function
function createStarsSection(starsNum) {
    let starsSection = document.getElementById("stars");
    for (let i = 0; i < starsNum; i++) {
        starsSection.innerHTML += '<img src="../images/star.png" height="60" width=60 alt="Star">';
    }
}