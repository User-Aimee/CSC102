//Defines variables
var timer = undefined;

//Initiates image movement
function startMoving() {
//sets how fast it changes positions
    if (timer === undefined) {
        timer = setInterval(movementTimer, 500);
    }
}

//Perimeters given for movement
function movementTimer() {
    var image = document.getElementById("tomato-meme");

//Moves image within browser boundaries
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

//Physically gets the image moving based on boundaries
    image.style.left = x + "px";
    image.style.top = y + "px";
}

//Initiates image stopping movement
function stopMoving() {

//Creates a pause. Prevents having to reset page to get the image moving again
    if (timer !== undefined) {
        clearInterval(timer);
        timer = undefined;
    }
}
