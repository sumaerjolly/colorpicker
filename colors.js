var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length ; i++){
    // add inital colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click event listeners to squares
    squares[i].addEventListener("click", function(){
       // Need to grab color of picked square
        var clickedColor = this.style.backgroundColor;
       // Comparing color of picked square to pickedColor
       if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor;
       }
       else{
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
       }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length ; i++){
        squares[i].style.backgroundColor = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num ;i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
    
}