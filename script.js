// Setup Items
var alphaSet = 'abcdefghijklmnopqrstuv';
var numericSet = '0123456789';
var specialSet = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
var incLower = true;
var incUpper = true;
var incNum = true;
var incSpecial = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Generate the random password
function generatePassword() {
  alert("generatePassword was reached");
}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
