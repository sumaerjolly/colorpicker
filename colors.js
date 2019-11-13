var colors = [
    "rgb(255, 0 , 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0 , 255)"
];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

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