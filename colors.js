var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");



easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none"
        }
    }

})

hardButton.addEventListener("click", function(){
    numOfSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
    }

})

colorDisplay.textContent = pickedColor;


resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "#steelblue";
    }
})

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
        resetButton.textContent = "Play Again?"

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