
let quoteBubble = document.getElementById('quoteBubble');
let easyBtn = document.getElementById('easyBtn');
let easyInput = document.getElementById('easyInput');
let sadFace = document.getElementById('sadFace');
let happyFace = document.getElementById('happyFace');
let thumbsUp = document.getElementById('thumbsUp');
let thinkingFace = document.getElementById('thinkingFace');
let randomNumber = document.getElementById('randomNumber');
let numberToGuessEM = 0;
let counter = document.getElementById('counter');
let countDown = 5;



function easyModeRandomNum(max){
    var number = parseInt(Math.floor(Math.random() * Math.floor(max))+1);
    // randomNumber.innerHTML = number;
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
    console.log("Sorry, That is Incorrect");
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
    console.log("That is Correct");
    console.log("numberToGuessEM is " + numberToGuessEM);
    console.log("easyInput is " + parseInt(easyInput.value));
  },600);
}



function countingDown(){
  easyBtn.addEventListener("click", function(){
    if(parseInt(easyInput.value) !== numberToGuessEM){
      wrongChoiceBubble();
      console.log(countDown-=1);
      counter.innerHTML = countDown;
    }
    if(countDown === 0){
      console.log(countDown-=0);
      console.log("GameOver the correct number is: " + numberToGuessEM);
      randomNumber.innerHTML = "GameOver the correct number is: " + numberToGuessEM;
      easyBtn.disabled = true;
      easyInput.disabled = true;
    }
    if(parseInt(easyInput.value) === numberToGuessEM){
      rightChoiceBubble();
    }
  })
}


thoughtBubble();
countingDown();
