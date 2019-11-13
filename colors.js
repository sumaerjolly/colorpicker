var colors = [
    "rgb(255, 0 , 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0 , 255)"
];
var pickedColor = colors[3];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");

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
           alert("Correct!");
       }
       else{
           alert("WRONG!");
       }
    });
}