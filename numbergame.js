


var quoteBubble = document.getElementById('quoteBubble');
var easyBtn = document.getElementById('easyBtn');

function wrongChoiceBubble(){
  quoteBubble.style.backgroundImage = "url('./Images_Folder/Left_Speach_Bubble_icon.png')";
  quoteBubble.style.backgroundRepeat = "no-repeat";
  quoteBubble.style.transform = "none";
}

function rightChoiceBubble(){
  quoteBubble.style.backgroundImage = "url('./Images_Folder/Middle_Speach_Bubble_icon.png')";
  quoteBubble.style.backgroundRepeat = "no-repeat";
  quoteBubble.style.transform = "none";
}

function thoughtBubble(){
  quoteBubble.style.backgroundImage = "url('./Images_Folder/Right_Speach_Bubble_icon.png')";
  quoteBubble.style.backgroundRepeat = "no-repeat";
  quoteBubble.style.transform = "scaleX(-1)";
}

easyBtn.addEventListener("click", function(){
    quoteBubble.style.backgroundImage = "none";
    wrongChoiceBubble();
})

easyBtn.addEventListener("mouseover", function(){
    quoteBubble.style.backgroundImage = "none";
    rightChoiceBubble();
})

thoughtBubble();
