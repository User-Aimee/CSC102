var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var timer = document.getElementById("timer");
var message = document.getElementById("message");

// 90 mins * 60 secs = 5400 seconds in 90 mins.
let timeLeft = 5400;

// constantly updating time left.
let interval;

// Math to get the correct time countdown.
function updateTimer() {
    let hour = Math.floor(timeLeft / 3600)
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

// Replaces empty spaces with zeros to make it look more like a clock.
    timer.innerHTML = `${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:
    ${seconds.toString().padStart(2,"0")}`;
}

/* -Updates decreased time.
-Disables start button after initially pressed to prevent time stacking. Reanables it when the 
stop or reset button is pressed first.
*/
function startTimer() {
    start.disabled = true;
    interval = setInterval(function() {
        timeLeft--;
        updateTimer();

//If/else requirement
    if (timeLeft > 5400) {
        message.textContent = "Begin!";
    }else if (timeLeft > 3600) {
        message.textContent = "Every second that passes is one you'll never get back. Don't waste them. Keep to your goal!";
    }else if (timeLeft > 1800) {
        message.textContent = "Don't stop because you're tired! Tell yourself that you're almost there and say it a lot.";
    }
    
// Sends an alert whenever the time is up and resets timer.
        if(timeLeft === 0){
            clearInterval(interval);
            message.textContent = "You made it! Take a well-deserved break!";
            timeLeft = 5400;
            updateTimer();
        } else {
            // do nothing.
        }
// Runs everything inside the function every one second starting from the moment that the start button is pressed.
    }, 1000);
}


//Allows pausing. Holds the value being stored in interval.
function stopTimer() {
    clearInterval(interval);
    start.disabled = false;
}

// Pauses the time, resets the timeLeft value.
function resetTimer() {
    clearInterval(interval);
    timeLeft = 5400;
    updateTimer();
    start.disabled = false;
}