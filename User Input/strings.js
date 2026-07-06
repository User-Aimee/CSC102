// Global variables.
var updateMessage = document.getElementById("message");
var greyMsg = document.getElementById("greyMsg");
var greyMessage = "";

// First function called. Calls users name inputs and verifies protocols. If it passes, it reveals the next function and hides this one.
function validate() {
    var fn = document.getElementById("firstName").value;
    var ln = document.getElementById("lastName").value;
    var name = fn + " " + ln;

if (name.length > 20) {
        message = "Error: Your first and last name needs to be less than 20 characters.";
// Added letter tester here.
    } else if (/^[A-Za-z]+$/.test(fn) && /^[A-Za-z]+$/.test(ln) && name.length < 20) {
        document.getElementById("nameHidden").style.display = "none";
        document.getElementById("zipHidden").style.display = "block";
        message = "";
        greyMessage = "To confirm your request, type your zip code.";
    } else {
        message = "ERROR: Invalid.";
    }
    updateMessage.textContent = message;
    greyMsg.textContent = greyMessage;
}


/* Second function called. Calls users zip code input and verifies protocols. 
If it passes, it hides everything and reveals the secret message. */
function zip() {
    var zc = document.getElementById("zipCode").value;

    if (zc.length !== 5) {
        message = "ERROR: Your zip code needs to include five numbers.";
// Added number tester here.
    } else if (/^\d+$/.test(zc) && zc.length == 5) {
        document.getElementById("nameHidden").style.display = "none";
        document.getElementById("zipHidden").style.display = "none";
        document.getElementById("top-msg").style.display = "none";
        document.getElementById("greyMsg").style.display = "none";
        document.getElementById("heading").style.display = "none";

//THIS IS THE "SECRET" MESSAGE.
        message = "Your account has been successfully deleted.";
//End of secret message.
    } else {
        message = "ERROR: Invalid."
    }
    updateMessage.textContent = message;
}
