// Setup Items
var alphaSet = 'abcdefghijklmnopqrstuvxyz';
var numericSet = '0123456789';
var specialSet = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
var passLength = null;
var incLower = true;
var incUpper = true;
var incNum = true;
var incSpecial = false;
var strSet = '';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Setup password parameters
function configurePassword() {
  // Reset the settings
  strSet = '';
  // Ask for the settings
  passLength = promptForPassLength();
  incLower = confirm("Would you like to include lowercase letters?");
  incUpper = confirm("Would you like to include uppercase letters?");
  incNum = confirm("Would you like to include numbers?");
  incSpecial = confirm("Would you like to include special characters?");
  // Setup the strSet to be used by the password generator
  if (!incLower && !incUpper && !incNum && !incSpecial) {
    alert("You must choose at least one character set. Please try again.")
  } else {
    if (incLower) { strSet += alphaSet; }
    if (incUpper) { var alphaSetUpper = alphaSet.toUpperCase(); strSet += alphaSetUpper; }
    if (incNum) { strSet += numericSet; }
    if (incSpecial) { strSet += specialSet; }
    // Provide confirmation to the user
    alert("You chose a password " + passLength + " characters long.\nInclude Lowercase Letters: " + incLower + "\nInclude Uppercase Letters: " + incUpper + "\nInclude Numbers: " + incNum + "\nInclude Special Characters: " + incSpecial);  
  }
}

function promptForPassLength() {
  while(true) {
    passLength = prompt("How many characters do you want your password to be?\nYou must choose a number between 8 and 128.");
    if (passLength && isNaN(passLength)) {
      alert("Invalid input.");
    } else if (passLength) {
      if (parseInt(passLength)>=8 && parseInt(passLength)<=128) {
        return parseInt(passLength);
      } else {
        alert("You must choose a value between 8 and 128 inclusive.")
      }
    } else if (isNull(passLength)) {
      return;
    } else {
      alert("Invalid input.");
    }
  }
}

// Generate the random password
function generatePassword() {
  if (strSet === '') {
    alert("You must configure settings first.");
  } else {
    pass = '';
    for (var i = 0; i < passLength; i++) {
      var char = Math.floor(Math.random() * strSet.length + 1);
      pass += strSet.charAt(char);
    }
    return pass;
  }
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
document.getElementById("settings").addEventListener("click", configurePassword);