let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice 6
// 2nd set of random images
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - dice 6

image1.setAttribute("src",randomImageSource);
image2.setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins "
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins "
}