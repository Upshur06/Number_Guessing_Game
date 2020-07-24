
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
}

function wrongChoiceBubble(){
  setTimeout(function(){
    quoteBubble.classList.replace('originalTalkBubble', 'wrongAnswerBubble');
    sadFace.style.visibility = "visible";
    thinkingFace.style.visibility = "hidden";
    happyFace.style.visibility = "hidden";
    thumbsUp.style.visibility = "hidden";
    bubbleStatement.textContent = "Sorry, That is Incorrect. Try Again!!!";
    easyInput.value = "";
    console.log("numberToGuessEM is " + numberToGuessEM);
    console.log("easyInput is " + parseInt(easyInput.value));
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
    endGameAlert.textContent = "Congrats,....You Won";
    restart.style.visibility = "visible";
    console.log("numberToGuessEM is " + numberToGuessEM);
    console.log("easyInput is " + parseInt(easyInput.value));
  },600);
}


function countingDown(){
  easyBtn.addEventListener("click", function(){
    if(parseInt(easyInput.value) !== numberToGuessEM){
      wrongChoiceBubble();
      console.log(countDown-=1);
      counter.textContent = countDown;
    }
    if(countDown === 0){
      console.log(countDown-=0);
      console.log("GameOver the correct number is: " + numberToGuessEM);
      bubbleStatement.style.visibility = "hidden";
      endGameAlert.style.visibility = "visible";
      endGameAlert.textContent = "GameOver the correct number is: " + numberToGuessEM;
      easyBtn.disabled = true;
      easyInput.disabled = true;
      restart.style.visibility = "visible";
    }
    if(parseInt(easyInput.value) === numberToGuessEM){
      rightChoiceBubble();
    }
  })
}

function startOver(){
  easyModeRandomNum(30);
  quoteBubble.classList.add('originalTalkBubble');
  sadFace.style.visibility = "hidden";
  thinkingFace.style.visibility = "visible";
  happyFace.style.visibility = "hidden";
  thumbsUp.style.visibility = "hidden";

  bubbleStatement.style.visibility = "visible";
  endGameAlert.style.visibility = "hidden";
  easyBtn.disabled = false;
  easyInput.disabled = false;
  restart.style.visibility = "hidden";
}

thoughtBubble();
countingDown();
// startOver();
