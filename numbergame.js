
var quoteBubble = document.getElementById('quoteBubble');
var easyBtn = document.getElementById('easyBtn');
var easyInput = document.getElementById('easyInput');
var sadFace = document.getElementById('sadFace');
var happyFace = document.getElementById('happyFace');
var thumbsUp = document.getElementById('thumbsUp');
var thinkingFace = document.getElementById('thinkingFace');
var randomNumber = document.getElementById('randomNumber');
var numberToGuessEM = 0;

function easyModeRandomNum(max){
    var number = parseInt(Math.floor(Math.random() * Math.floor(max))+1);
    randomNumber.innerHTML = number;
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

easyBtn.addEventListener("click", function(){
  if(parseInt(easyInput.value) === numberToGuessEM){
    rightChoiceBubble();
  } else {
    wrongChoiceBubble();
  }
})

thoughtBubble();
