// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//Declare variable for password generation
var numberOfCharcters = 0;
var isUpperCasedCharacters = false;
var isLowerCasedCharacters = false;
var isNumericCharacters = false;
var isSpecialCharacters = false;


// Function to prompt user for password options
function getPasswordOptions() {
  //Questions to ask the user:
  numberOfCharcters = parseInt(
    prompt(
      "How many characters would you like in the password? \n--> Please insert a number between 10 and 64 inclusive <--"
    )
  );
  numberOfCharcters = parseInt(
    prompt(
      "How many characters would you like in the password? \n--> Please least 10 characters but no more than 64! <--"
    )
  );
  //Check if the user inserted a number between 10 and 64 or not

  if (Number.isFinite(numberOfCharcters)) {
    //if the number of characters condition is fulfilled, go to next question
    if (numberOfCharcters >= 10 && numberOfCharcters <= 64) {
      isUpperCasedCharacters = confirm("Are Uppercase letters allowed?");
      isLowerCasedCharacters = confirm("Are Lowercase letters allowed?");
      isNumericCharacters = confirm("Are Numeric characters allowed?");
      isSpecialCharacters = confirm("Are special characters allowed?");
      if ( !(isUpperCasedCharacters ||
          isLowerCasedCharacters ||
          isNumericCharacters ||
          isSpecialCharacters)) {
        alert("You choose not to allow any of the characters options in the password!");
        return undefined;
      }
    } else {
      alert("Please enter a number between 10 and 64!");
      isUpperCasedCharacters = false;
      isLowerCasedCharacters = false;
      isNumericCharacters = false;
      isSpecialCharacters = false;
      return undefined;
    }
  } else {
    alert("Please enter a number");
    isUpperCasedCharacters = false;
    isLowerCasedCharacters = false;
    isNumericCharacters = false;
    isSpecialCharacters = false;
    return undefined;
  }
}
      
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var selectedChar = [];
  isUpperCasedCharacters ? selectedChar.push("upperCasedCharacters") : "";
  isLowerCasedCharacters ? selectedChar.push("lowerCasedCharacters") : "";
  isNumericCharacters ? selectedChar.push("numericCharacters") : "";
  isSpecialCharacters ? selectedChar.push("specialCharacters") : "";

  console.log(selectedChar);

  var generatedPass = [];

  for (let i = 0; i < numberOfCharcters; i++) {
    var item = getRandom(selectedChar);
    // console.log(item);

    switch (item) {
      case "upperCasedCharacters":
        generatedPass[i] = getRandom(upperCasedCharacters);
        break;

      case "lowerCasedCharacters":
        generatedPass[i] = getRandom(lowerCasedCharacters);
        break;

      case "numericCharacters":
        generatedPass[i] = getRandom(numericCharacters);
        break;

      case "specialCharacters":
        generatedPass[i] = getRandom(specialCharacters);
        break;
    }

    // console.log(generatedPass);
  }
}

var userSelection = [numberOfCharcters, isUpperCasedCharacters, isLowerCasedCharacters, isNumericCharacters, isSpecialCharacters];
var userChoice = prompt("Your chosen options are: " + userSelection);


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
console.log("Please press the button to generate a pasword");

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);