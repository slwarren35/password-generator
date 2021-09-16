// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
masterList = "";


//function to determine password length
var determineLength = function() {
    var passwordLength = window.prompt("How many characters would you like in your password?  Enter a number between 8 and 128.");

    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
      window.alert("You must enter a value between 8 and 128. Please try again!");
      return determineLength();
    }
    
} 

//functions to determine password criteria
function determineUpperCase() {
  var confirmUpperCase = window.confirm("Do you want to include uppercase letters in your password?  Click OK to include uppercase letters.");
  if (confirmUpperCase) {
    masterList += upperCase;

  }
  
}

function determineLowerCase() {
  var confirmLowerCase = window.confirm("Do you want to include lowercase letters in your password? Click OK to include lowercase letters.");
  if (confirmLowerCase) {
    masterList += lowerCase;
  }
}

function determineNumbers() {
  var confirmNumbers = window.confirm("Do you want to include numbers in your password? Click OK to include numbers.");
  if (confirmNumbers) {
    masterList += numbers;
  }
}

function determineSymbols() {
  var confirmSymbols = window.confirm("Do you want to include special symbols in your password?  Click OK to include special symbols.");
  if (confirmSymbols) {
    masterList += symbols;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  determineLength();
  determineLowerCase();
  determineNumbers();
  determineUpperCase();
  determineSymbols();
  console.log(masterList);
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
