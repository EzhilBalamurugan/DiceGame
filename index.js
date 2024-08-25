//image1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceNum1 = "dice" + randomNumber1 + ".png";
var randomDiceImg1 = "./images/" + randomDiceNum1;
var randomImage1 = document.querySelectorAll("img")[0];
randomImage1.setAttribute("src", randomDiceImg1);

//image2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceNum2 = "dice" + randomNumber2 + ".png";
var randomDiceImage2 = "./images/" + randomDiceNum2;
var randomImage2 = document.querySelectorAll("img")[1];
randomImage2.setAttribute("src", randomDiceImage2);

//win Condition
if (randomNumber1 > randomNumber2) {
  var titleWin = document.querySelectorAll("h1")[0];
  titleWin.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  var titleWin = document.querySelectorAll("h1")[0];
  titleWin.innerHTML = "Player 2 wins!";
} else {
  var titleWin = document.querySelectorAll("h1")[0];
  titleWin.innerHTML = "Draw!";
}
// if (randomNumber1 == 1) {
//   const imageElement = document.getElementById("Image1");
//   imageElement.src = "./images/dice1.png";
// } else if (randomNumber1 == 2) {
//   const imageElement = document.getElementById("Image1");
//   imageElement.src = "./images/dice2.png";
// } else if (randomNumber1 == 3) {
//   const imageElement = document.getElementById("Image1");
//   imageElement.src = "./images/dice3.png";
// } else if (randomNumber1 == 4) {
//   const imageElement = document.getElementById("Image1");
//   imageElement.src = "./images/dice4.png";
// } else if (randomNumber1 == 5) {
//   const imageElement = document.getElementById("Image1");
//   imageElement.src = "./images/dice5.png";
// } else if (randomNumber1 == 6) {
//   const imageElement = document.getElementById("Image1");
//   imageElement.src = "./images/dice6.png";
// } else {
//   alert("sorryyyyyy!!!");
// }

//----------------------------------------------------------
// switch (randomNumber1) {
//   case 1:
//     var imageElement = document.getElementById("Image1");
//     imageElement.src = "./images/dice1.png";
//     break;
//   case 2:
//     var imageElement = document.getElementById("Image1");
//     imageElement.src = "./images/dice2.png";
//     break;
//   case 3:
//     var imageElement = document.getElementById("Image1");
//     imageElement.src = "./images/dice3.png";
//     break;
//   case 4:
//     var imageElement = document.getElementById("Image1");
//     imageElement.src = "./images/dice4.png";
//     break;
//   case 5:
//     var imageElement = document.getElementById("Image1");
//     imageElement.src = "./images/dice5.png";
//     break;
//   case 6:
//     var imageElement = document.getElementById("Image1");
//     imageElement.src = "./images/dice6.png";
//     break;

//   default:
//     alert("Invalid Number");
// }

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
