// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var masterList = "";
var passwordLength;

//function to determine length of password
var determineLength = function() {
  passwordLength = prompt("How many characters would you like in your password?  Enter a number between 8 and 128.");
  
  //make sure length of password is > 8 or < 128 and user doesn't enter an empty response
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
  window.alert("You must enter a value between 8 and 128. Please try again!");
  return determineLength();
  }
  //change prompt string to integer
  passwordLength = parseInt(passwordLength);
  
};


//function to determine password criteria
var passwordCriteria = function() {
  //confirms to get user response on what they wanted in their password
  var confirmUpperCase = window.confirm("Do you want to include uppercase letters in your password?  Click OK to include uppercase letters.");
  var confirmLowerCase = window.confirm("Do you want to include lowercase letters in your password? Click OK to include lowercase letters.");
  var confirmNumbers = window.confirm("Do you want to include numbers in your password? Click OK to include numbers.");
  var confirmSymbols = window.confirm("Do you want to include special symbols in your password?  Click OK to include special symbols.");

  //if they answered no to all types an alert to prompt them they have to have at least one type
  if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols) {
    alert("You must include at least one of the following: lowercase, uppercase, numbers or symbols.  Please try again!");
    passwordCriteria();
  }

  //add characters to string to pick from for each criteria that is confirmed  
  if (confirmUpperCase) {
    masterList += upperCase;
  }

  if (confirmLowerCase) {
    masterList += lowerCase;
  }  

  if (confirmNumbers) {
    masterList += numbers;
  }

  if (confirmSymbols) {
    masterList += symbols;
  }
};

//generate password function
function generatePassword() {
  //call to function to determine password length
  determineLength();

  //call to function to determine password criteria
  passwordCriteria();

  //create random password from list of available characters
  var  randomPassword = "";
  for (var i=0; i < passwordLength; i++){
    randomPassword += masterList.charAt(Math.floor(Math.random()*masterList.length));
  }

  return randomPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //reset masterList each time program is rerun
  masterList = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

