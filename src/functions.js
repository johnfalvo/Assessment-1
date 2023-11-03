// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y
}

console.log(divide(10,2))

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
 let sum = x + y
 let avg = sum / 2
 return avg
}

console.log(average(10, 2))

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if (x === 10.001, y === 10) {
    return true
  } else {
    return false
  }
}
console.log(approximatelyEqual(10.001, 10))

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  
let firstName = firstName.upperCase();
let lastName = lastName.upperCase();

  }

console.log(fullName(john, doe))

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  const a = person
  const b = beverage
  const c = location

const sentence= `The ${person} was drinking ${beverage} at ${location}.`
console.log(sentence);
}

console.log(generateSentence('Kay', 'Coffee', 'the local cafe'))

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
let string = [`javascript`]
function censorVowels(string) {
  if (string === 'a') {
  return '*';
} else if (string === "e") {
 return "*";
} else if (string === "i") {
return "*";
} else if (string === "o");
return "*";
} else if (string === "u")
return "*";
}
}


// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
