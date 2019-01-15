// var colors =  [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]
var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3];
var pickedColor = pickColor;
var colorDisplay = document.getElementById("colorDisplay"); /*watch capitals*/
// select the div and define the message to display in the conditional
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//pageload
init();

function init() {
	//mode buttons event 
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i]. addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
			// figure out how many squares to show
			//pick new colors
			//pick a new picked color
			//update page to reflect changes
		});
	}
};

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
	// add click listeners to squares
		squares[i].addEventListener("click", function (){
			// grab color of clicked square
			// var clickedColor = alert(this.style.backgroundColor);
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
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
}

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i]. addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		// figure out how many squares to show
		//pick new colors
		//pick a new picked color
		//update page to reflect changes
	});
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//reset the correct or try again message
	messageDisplay.textContent="";
	resetButton.textContent = "New Colors";
	//change the colors of squares
	for (var i = 0; i < squares.length; i++) {
		//reduces to 3 squares for easy mode
		if(colors[i]) { /*"if there is a square for a color*/
		squares[i].style.display = "block";/* this line resets hard to 6 from 3*/
		squares[i].style.background= colors[i];
			
		} else {
			squares[i].display = "none";
		}
	}
	h1.style.backgroundColor = "#232323";
};

// easyBtn.addEventListener("click", function(){
// 	//use your predefined class to create the selected appearance
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) { 
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}

// });

resetButton.addEventListener("click", function(){
	reset();
});


// use style.backgroundColor used in all browser


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
