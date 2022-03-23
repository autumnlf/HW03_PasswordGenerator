// Assignment Code
var generateBtn = document.querySelector("#generate");

//function for creating password
function generatePassword() {

  //variables for character types and password length
  const specChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var specChars = specChar.split(''); //making the string into an array
  var onespec = specChars[Math.floor(Math.random()*specChars.length)]; //pulling one random item from array

  const numChar = "0123456789";
  var numChars = numChar.split('');
  var onenum = numChars[Math.floor(Math.random()*numChars.length)];

  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperChars = upperChar.split('');
  var oneupper = upperChars[Math.floor(Math.random()*upperChars.length)];

  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var lowerChars = lowerChar.split('');
  var onelower = lowerChars[Math.floor(Math.random()*lowerChars.length)];

  //empty array to add types of characters user decides to include
  var promptArray = [];
  //empty array to store at least one of each chosen character type
  var partialPassArray = [];
  //empty array to be final password
  var finalPassArray = [];


  //length prompt
  var passlength = window.prompt("Please enter a password length between 8 and 128");
  //leaves if user cancels dialog
  if(!passlength){
    return;
  }
  //prompts again if input is not within the acceptable range
  while(passlength < 8 || passlength > 128){
    var passlength = window.prompt("Please enter a password length between 8 and 128");
    if (!passlength){
      return;
    }
  }
  console.log(passlength);

  //asking about what type of characters to include
  var yesUpper = window.confirm("Would you like to include uppercase letters? Press 'Ok' for yes, and 'Cancel' for no.");
  if(yesUpper){
    promptArray = promptArray.concat(upperChars);
    partialPassArray = partialPassArray.concat(oneupper);
  }
  var yesLower = window.confirm("Would you like to include lowercase letters? Press 'Ok' for yes, and 'Cancel' for no.");
  if(yesLower){
    promptArray = promptArray.concat(lowerChars);
    partialPassArray = partialPassArray.concat(onelower);
  }
  var yesSpecial = window.confirm("Would you like to include special characters? Press 'Ok' for yes, and 'Cancel' for no.");
  if(yesSpecial){
    promptArray = promptArray.concat(specChars);
    partialPassArray = partialPassArray.concat(onespec);
  }
  var yesNumbers = window.confirm("Would you like to include numbers? Press 'Ok' for yes, and 'Cancel' for no.");
  if(yesNumbers){
    promptArray = promptArray.concat(numChars);
    partialPassArray = partialPassArray.concat(onenum);
  }
  console.log(promptArray);
  console.log(partialPassArray);

  // I want to make sure there will always be AT LEAST 1 of each type of chosen character type. 
  // Because even though the chosen characters are apart of the random pool, that does not guarantee
  // at least one will be a part of the final password. 'partialPassArray' is an array made up of 
  // one random character from each of the chosen character types, and 'promptArray' is an array made
  // up of every character from each of the chosen character types. I will concatenate the 'partialPass'
  // array with the 'finalPassArray' to ensure at least 1 character from the decided types is included.
  
  // To make the final password the desired length, I need to get the difference in lengths of
  // 'passlength' and 'partialPassArray', so when 'finalPassArray' and 'partialPass' are concatenated
  // the password is the correct length.
  var minuslength = (passlength - partialPassArray.length);  
  console.log(minuslength);

  //generating password
  for (var i=0; i < minuslength; i++){
    finalPassArray.push(promptArray[Math.floor(Math.random()*promptArray.length)]);
  } 
  console.log(finalPassArray);

  //concatenating the two arrays to become one password
  var password = partialPassArray.concat(finalPassArray);
  console.log(password); 

  //changing the array into a string
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
