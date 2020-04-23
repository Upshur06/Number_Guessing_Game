
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
  quoteBubble.style.backgroundImage = "url('./Images_Folder/Right_Speach_Bubble_icon.png')";
  quoteBubble.style.backgroundRepeat = "no-repeat";
  quoteBubble.style.transform = "scaleX(-1)";
  thinkingFace.style.visibility = "visible";
}

function wrongChoiceBubble(){
  quoteBubble.style.backgroundImage = "url('./Images_Folder/Left_Speach_Bubble_icon.png')";
  quoteBubble.style.backgroundRepeat = "no-repeat";
  quoteBubble.style.transform = "none";
  thinkingFace.style.visibility = "hidden";
  happyFace.style.visibility = "hidden";
  thumbsUp.style.visibility = "hidden";
  sadFace.style.visibility = "visible";
}

function rightChoiceBubble(){
  quoteBubble.style.backgroundImage = "url('./Images_Folder/Middle_Speach_Bubble_icon.png')";
  quoteBubble.style.backgroundRepeat = "no-repeat";
  quoteBubble.style.transform = "none";
  sadFace.style.visibility = "hidden";
  thinkingFace.style.visibility = "hidden";
  happyFace.style.visibility = "visible";
  thumbsUp.style.visibility = "visible";
}



easyBtn.addEventListener("click", function(){
  if(parseInt(easyInput.value) === numberToGuessEM){
    quoteBubble.style.backgroundImage = "none";
    rightChoiceBubble();
    console.log("That is Correct");
  } else {
    quoteBubble.style.backgroundImage = "none";
    wrongChoiceBubble();
    console.log("Sorry, That is Incorrect");
  }

  console.log("numberToGuessEM is " + numberToGuessEM);
  console.log("easyInput is " + parseInt(easyInput.value));
})

thoughtBubble();
