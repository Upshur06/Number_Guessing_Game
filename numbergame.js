
var quoteBubble = document.getElementById('quoteBubble');
var easyBtn = document.getElementById('easyBtn');
var easyInput = document.getElementById('easyInput');
var sadFace = document.getElementById('sadFace');
var happyFace = document.getElementById('happyFace');
var thumbsUp = document.getElementById('thumbsUp');
var thinkingFace = document.getElementById('thinkingFace');
var randomNumber = document.getElementById('randomNumber');

function easyModeRandomNum(max){
    var number = Math.floor(Math.random() * Math.floor(max))+1;
    // console.log(number);
    randomNumber.innerHTML = number;

    // console.log("Number is " + typeof number);
    // console.log("easyInput is " + typeof parseInt(easyInput.value));
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

  if(easyInput.value != randomNumber.value){
    quoteBubble.style.backgroundImage = "none";
    wrongChoiceBubble();
    console.log("Sorry, That is Incorrect");
  }
  if(easyInput.value === randomNumber.value){
    quoteBubble.style.backgroundImage = "none";
    rightChoiceBubble();
    console.log("That is Correct");
  }
  console.log("randomNumber is " + typeof randomNumber.value);
  console.log("easyInput is " + typeof parseInt(easyInput.value));
})

// easyBtn.addEventListener("mouseover", function(){
//     quoteBubble.style.backgroundImage = "none";
//     rightChoiceBubble();
//     console.log(easyInput.value);
// })

thoughtBubble();
// easyModeRandomNum(30);
