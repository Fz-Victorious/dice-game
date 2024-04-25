
let randNumber1 = Math.floor(Math.random() * 6 + 1);
let randNumber2 = Math.floor(Math.random() * 6 + 1);
let image1 = document.querySelector(".image-player1").setAttribute("src", `./assets/dice${randNumber1}.png`);
let image2 = document.querySelector(".image-player2").setAttribute("src", `./assets/dice${randNumber2}.png`);
let result = document.querySelector("h1");
if(randNumber1 > randNumber2){
    result.innerHTML = "🚩 Player 1 Wins!";
}
else if (randNumber1 < randNumber2){
    result.innerHTML = "Player 2 Wins! 🚩";
}
else{
    result.innerHTML = "Draw!";
}