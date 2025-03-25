window.onload = function () {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice1").setAttribute("src", `dice${randomNumber1}.png`);
    document.getElementById("dice2").setAttribute("src", `dice${randomNumber2}.png`);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerText = "Draw!";
    }
}