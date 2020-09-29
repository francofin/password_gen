// Assignment code here

var special_chars = ['!', '~', '#', '$', '%', '^', '&', '*', '+', '-', '{', '}', '<', '>', '?']
var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['0','1','2','3','4','5','6','7','8','9']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var randomNumber = function(lengths) {
  var value = Math.floor(Math.random() * (lengths));

  return value;
};
// Write password to the #password input
var writePassword = function () {
  var warning = window.alert('Please select the criteria for your password');
  warning;
  var criteria = window.confirm('Would you like to include special characters such as #, $ and others?');
  
  var include_letters = window.confirm('Would you like to include letters in the password?');
  
  var include_numbers = window.confirm('Would you like to include numbers in the password?');
 
  var password_length_raw = window.prompt('How long would you like your password to be, Passwords must be more than 8 characters and less than 128 characters');
  var password_length = parseInt(password_length_raw);
  var number_chosen = [];
  var chars_chosen = [];
  var letter_chosen = [];

  if (criteria) {
    special_chars = special_chars;
    for (var i = 0; i < special_chars.length; i++) {
      var index = randomNumber(special_chars.length);
      chars_chosen.push(special_chars[index]);
    }
  }
  else {
    chars_chosen = [];
  }
  if (include_letters) {
    letter = letter;
    for (var i = 0; i < letter.length; i++) {
      var index = randomNumber(letter.length);
      letter_chosen.push(letter[index]);
    }
  }
  else {
    letter_chosen = [];
  }
  if (include_numbers) {
    numbers = numbers;
    for (var i = 0; i < numbers.length; i++) {
      var index = randomNumber(numbers.length);
      number_chosen.push(numbers[index]);
    }
  }
  else {
    number_chosen = [];
  }

  var password_characteristics = chars_chosen.concat(letter_chosen, number_chosen);

  var passwordGenerator = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  var password = passwordGenerator(password_characteristics);
  var finalPassword = password.join("");
  console.log(finalPassword);

  var passwordText = document.querySelector("#password");
  

  passwordText.textContent = finalPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
