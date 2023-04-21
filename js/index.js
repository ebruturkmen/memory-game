// winner text
setInterval(function() {
    document.getElementById("winnerText").style.visibility = "visible";
    setTimeout(function() {
        document.getElementById("winnerText").style.visibility = "hidden";
    }, 900);
}, 1800);