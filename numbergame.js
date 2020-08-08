
let quoteBubble = document.getElementById('quoteBubble');
let easyBtn = document.getElementById('easyBtn');
let easyInput = document.getElementById('easyInput');
let sadFace = document.getElementById('sadFace');
let happyFace = document.getElementById('happyFace');
let thumbsUp = document.getElementById('thumbsUp');
let thinkingFace = document.getElementById('thinkingFace');
let endGameAlert = document.getElementById('endGameAlert');
let bubbleStatement = document.getElementById('quouteBubbleText');
let restart = document.getElementById('restart');
let numberToGuessEM = 0;
let counter = document.getElementById('counter');
let countDown = 5;


function easyModeRandomNum(max){
    var number = parseInt(Math.floor(Math.random() * Math.floor(max))+1);
    numberToGuessEM = number;
}

function thoughtBubble(){
  easyModeRandomNum(30);
  quoteBubble.classList.add('originalTalkBubble');
  bubbleStatement.innerHTML = "I'm thinking of a" + "<br>";
  bubbleStatement.innerHTML += "number between 1 and 30" + "<br />";
  bubbleStatement.innerHTML += "Can you guess what" + "<br />";
  bubbleStatement.innerHTML += "number it is???";
}

function wrongChoiceBubble(){
  setTimeout(function(){
    quoteBubble.classList.replace('originalTalkBubble', 'wrongAnswerBubble');
    sadFace.style.visibility = "visible";
    thinkingFace.style.visibility = "hidden";
    happyFace.style.visibility = "hidden";
    thumbsUp.style.visibility = "hidden";
    bubbleStatement.innerHTML = "Sorry, That is Incorrect." + "<br />";
    bubbleStatement.innerHTML += "Try Again!!!";
    console.log("numberToGuessEM is " + numberToGuessEM);
    console.log("easyInput is " + parseInt(easyInput.value));
    easyInput.value = "";
  },600);
}

function rightChoiceBubble(){
  setTimeout(function(){
    quoteBubble.classList.replace('wrongAnswerBubble', 'rightAnswerBubble');
    sadFace.style.visibility = "hidden";
    thinkingFace.style.visibility = "hidden";
    happyFace.style.visibility = "visible";
    thumbsUp.style.visibility = "visible";
    bubbleStatement.textContent = "That is Correct";
    easyBtn.disabled = true;
    easyInput.disabled = true;
    endGameAlert.innerHTML = "Congrats,....You Won";
    restart.style.visibility = "visible";
    console.log("numberToGuessEM is " + numberToGuessEM);
    console.log("easyInput is " + parseInt(easyInput.value));
  },600);
}

function countingDown(){
  easyBtn.addEventListener("click", function(){
    (parseInt(easyInput.value) !== numberToGuessEM) ?
         (wrongChoiceBubble(),
          console.log(countDown-=1),
          counter.innerHTML = countDown) :
    (parseInt(easyInput.value) === numberToGuessEM) ? rightChoiceBubble():0;
    if(countDown === 0){
      console.log(countDown-=0);
      console.log("GameOver the correct number is: " + numberToGuessEM);
      bubbleStatement.style.visibility = "hidden";
      endGameAlert.style.visibility = "visible";
      endGameAlert.innerHTML  = "GameOver the correct number is: " + numberToGuessEM;
      easyBtn.disabled = true;
      easyInput.disabled = true;
      restart.style.visibility = "visible";
    }
  })
}

function startOver(){
  quoteBubble.classList.replace('rightAnswerBubble','originalTalkBubble');
  quoteBubble.classList.replace('wrongAnswerBubble','originalTalkBubble');
  bubbleStatement.innerHTML = "I'm thinking of a" + "<br>";
  bubbleStatement.innerHTML += "number between 1 and 30" + "<br />";
  bubbleStatement.innerHTML += "Can you guess what" + "<br />";
  bubbleStatement.innerHTML += "number it is???";
  sadFace.style.visibility = "hidden";
  thinkingFace.style.visibility = "visible";
  happyFace.style.visibility = "hidden";
  thumbsUp.style.visibility = "hidden";
  bubbleStatement.style.visibility = "visible";
  endGameAlert.style.visibility = "hidden";
  restart.style.visibility = "hidden";
  counter.innerHTML = 5;
  easyBtn.disabled = false;
  easyInput.disabled = false;
  easyInput.value = "";
}

thoughtBubble();
countingDown();
startOver();
