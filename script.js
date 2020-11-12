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
  
  // Prompt for character types
  let lowerInput = prompt("Include lowercase letters? Y or N");

  let upperInput = prompt("Include uppercase letters? Y or N");

  let numInput = prompt("Include numbers? Y or N");

  let specialInput = prompt("Include special characters? Y or N");


  // When all prompts are completed, generate password with matching criteria
  return ; 
}