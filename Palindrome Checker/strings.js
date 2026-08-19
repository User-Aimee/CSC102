var updateMessage = document.getElementById("message");

//Cleans string and checks if it's a palindrome once the user clicks the button.
function check() {
    var string = document.getElementById("txt").value;

    lowerString = string.toLowerCase().replaceAll(' ', '');
    var newString = lowerString.split('').reverse().join("");

    //User string should be all lowercase with no whitespaces now.
    /*If `newString` includes lowercase alphabet and the cleaned `newString is the same as
    the `lowerString`, it marks it as a palindrome. Else same perimeters except if they're
    not equal to each other, they're marked as false. Else the user included non alphabet 
    characters.
    */

    if (/^[a-z]+$/.test(newString) && newString === lowerString) {
        message = "True.";
        } else if (/^[a-z]+$/.test(newString) && newString !== lowerString) {
        message = "False.";
        }
        else {
        message = "Letters only, please!";
        }
    
    updateMessage.textContent = message;

    //Keeping my useful console.logs moving forward to keep track of my thought process
    console.log(lowerString);
    console.log(newString);
}