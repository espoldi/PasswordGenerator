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

  // Function for password length
  function passwordLength() {
  
    // Prompt for length between 8 and 128 characters
    let lengthInput = prompt("How long should the password be? Pick a number between 8 and 128.");

    // Password length varification
    let length = parseInt(lengthInput, 10);

    if((length > 7) && (length < 129)) {
      
      confirm("Thank you, your password will be " + length + " characters long.");}

    else {
      confirm("Password length not valid.");
      passwordLength();}
  }

// Execute password length function
passwordLength();

  //Declare array for character types
  let characters = [];

  // Function for lowercase letters
  function lower() {

    let lowerInput = prompt("Include lowercase letters? Y or N");
      
    switch(lowerInput) {
        case "Y", "y":
          characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
          confirm("Lowercase letters selected.");
          break;

        case "N", "n":
          confirm("O.K.");
          break;

        default:
          confirm("Invalid input.");
          lower();
          break;
      }
  }

// Execute lowercase letter inclusion
lower();

  // Function for uppercase letters
  function upper() {
    let upperInput = prompt("Include uppercase letters? Y or N");
   
    switch(upperInput) {
      case "Y", "y":
        characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
        confirm("Uppercase letters selected.");
        break;

      case "N", "n":
        confirm("O.K.");
        break; 

      default:
        confirm("Invalid input.");
        upper();
        break;
    }
  }

// Execute uppercase letter inclusion
upper();

  // Function for number characters
  function int() {
    let numInput = prompt("Include numbers? Y or N");
   
    switch(numInput) {
      case "Y", "y":
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        confirm("Numbers selected.");
        break;

      case "N", "n":
        confirm("O.K.");
        break;

      default:
        confirm("invalid input.");
        int();
        break;
    }
  }

  // Execute numbers inclusion
  int();

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