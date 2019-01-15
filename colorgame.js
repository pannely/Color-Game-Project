// var colors =  [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); /*watch capitals*/
// select the div and define the message to display in the conditional
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


easyBtn.addEventListener("click", function(){
	//use your predefined class to create the selected appearance
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) { /* if there are an existing color */
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}

});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//reset the correct or try again message
	messageDisplay.textContent="";
	this.textContent = "New Colors";
	//change the colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background= colors[i];
	}
	h1.style.backgroundColor = "#232323";

});

// Grab h1 by ID and set it equal to the "winning" color
colorDisplay.textContent = pickedColor;

// use style.backgroundColor used in all browser
for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function (){
		// grab color of clicked square
		// var clickedColor = alert(this.style.backgroundColor);
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			// event when wrong
			// alert("Correct!");
			messageDisplay.textContent="Correct!";
			// pass in our function that changes all boxes color
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			//change text content of reset button
			resetButton.textContent = "Play Again?"
		} else {
			// event when right (disapper)
			// alert("WRONG!!!")
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "try Again"
		}
	});
}

/* this function changes all squares to the same color */
function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.background = color;
	}
	
}

/* randomly pick the winning color */
function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
// click event logic

/* Create an array of colors, length based on the number you provide */
function generateRandomColors(num){
	// make an array
	var arr=[];
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color (from function) and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

/* random color generator */
function randomColor(){
	// pick a "Red" 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};
