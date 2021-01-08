// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// start of function to generate password
var generatePassword = function(){
  // Prompt user for desired number of characters. Ansswer is stored in variable numCharacters 
  var numCharacters = window.prompt("How many characters do you wish your password to be?");

  // Converts prompt string input into an integer //
  numCharacters = parseInt(numCharacters);

  // condition to check if user entered number in the usable range. If number is too big or small, function is called again
  if(numCharacters < 8 || numCharacters > 128){
    window.alert("Please enter a value between 8 and 128");
    generatePassword();
  }

  // User is asked whether they want specific character types in the password and their answers are stored in variable as a boolean 
  var numConfirm = window.confirm("Would you like this password to contain numbers?")
  var upperConfirm = window.confirm("Would you like this password to contain uppercase letters")
  var lowerConfirm = window.confirm("Would you like this password contain lowercase letters?")
  var specialTypeConfirm = window.confirm("Would you like this password to contain special character types?")

  // If user picks none of the options, the user is alerted that at least one choice must be made and the function is called again 
  if(numConfirm === false && upperConfirm === false && lowerConfirm === false && specialTypeConfirm === false){
    window.alert("Please pick AT LEAST 1 character type")
    generatePassword();
  }


  // initializing variables   
  var password = []
  var pwPicks = []
  var charChoices = [] 

  // Potential characters variables for each category 
  specialType = [" ", "!", "#", "%", "$", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\ ", "]", "^", "-", "`", "{", "|", "}", "~"]
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
  upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  

  // Beginning of conditions for various desired specialType options. Starts with Number as universal choice //

  if(numConfirm && upperConfirm && lowerConfirm && specialTypeConfirm){
    charChoices = number.concat( specialType, upperCase, lowerCase);
  }
  
  // Number universal is choice //
  else if(numConfirm && upperConfirm && lowerConfirm && !specialTypeConfirm){
    charChoices = number.concat(upperCase, lowerCase);
  }else if(numConfirm && upperConfirm && !lowerConfirm && !specialTypeConfirm){
    charChoices = number.concat(upperCase);
  } else if(numConfirm && !upperConfirm && lowerConfirm && !specialTypeConfirm){
    charChoices = number.concat(lowerCase);
  } else if(numConfirm && !upperConfirm && !lowerConfirm && specialTypeConfirm){
    charChoices = number.concat(specialType);
  } else if(numConfirm && !upperConfirm && !lowerConfirm && !specialTypeConfirm){
    charChoices = number;
  }  
  
  // Now upperCase is universal choice //
  else if(upperConfirm && lowerConfirm && specialTypeConfirm && !numConfirm){
    charChoices = upperCase.concat(lowerCase, specialType);
  } else if(upperConfirm && lowerConfirm && !specialTypeConfirm && !numConfirm){
    charChoices = upperCase.concat(lowerCase);
  } else if(upperConfirm && !lowerConfirm && specialTypeConfirm && !numConfirm){
    charChoices = upperCase.concat(specialType);
  } else if(upperConfirm && lowerConfirm && !specialTypeConfirm && !numConfirm){
    charChoices = upperCase.concat(number);
  } else if(upperConfirm && !lowerConfirm && !specialTypeConfirm && !numConfirm){
    charChoices = upperCase;
  }  
  
  // Now lowerCase is universal choice //
  else if(lowerConfirm && specialTypeConfirm && numConfirm && !upperConfirm ) {
    charChoices = lowerCase.concat(specialType, number);
  } else if(lowerConfirm && specialTypeConfirm && !numConfirm && !upperConfirm ) {
    charChoices = lowerCase.concat(specialType);
  } else if(lowerConfirm && !specialTypeConfirm && numConfirm && !upperConfirm ) {
    charChoices = lowerCase.concat(number);
  } else if(lowerConfirm && !specialTypeConfirm && !numConfirm && upperConfirm ) {
    charChoices = lowerCase.concat(upper);
  } else if(lowerConfirm && !specialTypeConfirm && !numConfirm && !upperConfirm ) {
    charChoices = lowerCase;
  } 
  
  // Now specialType is universal choice //
  else if(specialTypeConfirm && numConfirm && upperConfirm && !lowerConfirm ) {
    charChoices = specialType.concat(number, upperCase);
  } else if(specialTypeConfirm && numConfirm && !upperConfirm && !lowerConfirm ) {
    charChoices = specialType.concat(number);
  } else if(specialTypeConfirm && !numConfirm && upperConfirm && !lowerConfirm ) {
    charChoices = specialType.concat(upperCase);
  } else if(specialTypeConfirm && !numConfirm && !upperConfirm && lowerConfirm ) {
    charChoices = specialType.concat(lowerCase);
  } else if(specialTypeConfirm && !numConfirm && !upperConfirm && !lowerConfirm ) {
    charChoices = specialType;
  }
  
  
  
  for(i = 0; i < numCharacters; i++){
    var pwPicks = charChoices[Math.floor(Math.random() * charChoices.length)];
    password = password + pwPicks
  }

  return password;
  
}
  /*
  for(i= 0; i < numCharacters; i++) {
    if(numConfirmation && upperConfirmation && lowerConfirmation && specialTypeConfirmation){
    ranNum = Math.floor(Math.random() * (126 - 33 + 1) + 33);
    }

    password = password + String.fromCharCode(ranNum); 
  }
  return password;
/*

}

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

/* 
1. Button is pressed and generatePassword() is ran
2. once inside function, user is prompted for number of characters when button is pressed.
3. The desired number of characters is stored inside of a variable
4. Next, the user is asked to confirm whether they wish to include Uppercase, Lowercase, Numbers, Special Characters, or all of the above in their password. 
5. Possible character lists are dictated as variables
6. Next come if and else if statements to dictate every possible outcome of character requests by the user.
7. Each if statement will concantenate the possible character arrays into one array assigned to a global variable
8. 



// .join & .push & .concat
// password = array


/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
