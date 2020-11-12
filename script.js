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
    if(length < 8) {confirm("Password length too short.");}

      else if(length > 128) {confirm("Password length too long.")}

      else {confirm("Thank you, your password will be " + length + " characters long.");}
  
  // Prompt for character types
      // switch? lowercase, uppercase, numeric, special
  // When all prompts are completed, generate password with matching criteria
  return ; 
}