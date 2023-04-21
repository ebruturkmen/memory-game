function game(numPairofCard) {

    window.onload = function() {
        createRandom(numPairofCard);
        let cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            setTimeout(openAllCards, 1000);
            // openAllCards function
            function openAllCards () {
                card.querySelector('.close-card').classList.remove('start-close-card');
                card.querySelector('.open-card').classList.remove('start-open-card');
                card.classList.add("cardFlip");
            }
        });     
    };

    var cards = document.querySelectorAll('.card');
    var sum = 0;
    let selectCard1, selectCard2, card1, card2, dataid1, dataid2;
    cards.forEach((card) => {
        // card click
        card.addEventListener('click', function() {
            sum += 1;
            if(sum > 2) {
                [...cards].forEach((card) => { 
                    card.querySelector('.open-card').classList.remove('open-card-toggle');
                    card.querySelector('.close-card').classList.remove('close-card-toggle');
                });
                sum = 1;
            }
            card.classList.toggle('cardFlip');
            card.querySelector('.open-card').classList.toggle('open-card-toggle');
            card.querySelector('.close-card').classList.toggle('close-card-toggle');
            if(sum == 1) {
                card1 = card;
                dataid1 = card.getAttribute('data-id');
                selectCard1 = card.querySelector('.card-img img').getAttribute('src');
            } else if(sum == 2) {
                card2 = card;
                dataid2 = card.getAttribute('data-id');
                selectCard2 = card.querySelector('.card-img img').getAttribute('src');
                isCardsEqual(numPairofCard);
            }
        });
    });

    // isCardsEqual function
    let scor = 0;
    let moves = 0;
    function isCardsEqual(numPair) {
        moves += 1;
        document.getElementById("movesNum").innerHTML = moves;
        if ((selectCard1 == selectCard2) && !(dataid1 == dataid2)) {
            scor += 1;
            document.getElementById("scoreNum").innerHTML = scor;
            card1.style.display = "none";
            card2.style.display = "none";
        }
        if (scor == numPair) {
            if(document.getElementById("movesNum").classList.contains("first")) {
                localStorage.setItem("first_player_move", moves);
            }
            if(document.getElementById("movesNum").classList.contains("second")) {
                localStorage.setItem("second_player_move", moves);
                let firstPlayerMoves = localStorage.getItem("first_player_move");
                let secondPlayerMoves = moves;
                whoWin(firstPlayerMoves, secondPlayerMoves);
            }
            successRate(numPair, moves);
        }
    }

}

// create random
function createRandom(numPair) {
    let numPairs = numPair + 1
    let forder;
    for (let i = 1; i < numPairs; i++) {
        forder = Math.floor(Math.random() * numPairs);
        let card = document.querySelector(`[data-id = "${i}"]`);
        card.style.order = forder;
    }
}

// who win function
function whoWin(firstMoves, secondMoves) {
    if(firstMoves == secondMoves) {
        document.getElementById("winnerText").innerHTML = "Draw!";
    }
    if (firstMoves > secondMoves) {
        document.getElementById("winnerText").innerHTML = "Winner is second player!";
    }
    if (secondMoves > firstMoves) {
        document.getElementById("winnerText").innerHTML = "Winner is first player!";
    }
}