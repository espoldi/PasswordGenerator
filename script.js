// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // Prompt for length between 8 and 128 characters
  let lengthInput = prompt("How long should the password be? Pick a number between 8 and 128.");

  // Password length varification
  let length = parseInt(lengthInput, 10);

    if((length > 7) && (length < 129)) {
      
      confirm("Thank you, your password will be " + length + " characters long.");}

    else {confirm("Password length not valid.");}
  
  //Declare array for character types
  let characters = [];

  // Prompt for character types
  let lowerInput = prompt("Include lowercase letters? Y or N");
      
    switch(lowerInput) {
        case "Y", "y":
          characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
          break;

        case "N", "n":
          confirm("O.K.");
          break;

        default:
          
          break;
      }

  let upperInput = prompt("Include uppercase letters? Y or N");
   
  switch(upperInput) {
    case "Y": 

    case "N": 

    default: 
  }

  let numInput = prompt("Include numbers? Y or N");
   
  switch(numInput) {
    case "Y": 

    case "N": 

    default: 
  }

  let specialInput = prompt("Include special characters? Y or N");
   
  switch(specialInput) {
    case "Y": 

    case "N": 

    default: 
  }


  // When all prompts are completed, generate password with matching criteria
  // add each type with each Y to an array, pull random index and add to end of password in a loop length
  return ; 
}