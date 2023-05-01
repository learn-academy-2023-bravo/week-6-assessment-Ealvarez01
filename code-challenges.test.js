// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

//describe(name of function as a string, callback function)
describe("arrayCaps", () => {
  
  // Given function of a array of objects with expected outputs
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  ]  
    //it(description of the function as a string, callback function)
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

    //expect(statement with the function call and jest matcher with the expected output) 
    expect(arrayCaps(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
})

// FAIL  ./code-challenges.test.js
// arrayCaps
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// ● arrayCaps › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//   ReferenceError: arrayCaps is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: array of objects
// output: array

// input: [{ name: "ford prefect", occupation: "a hitchhiker" }, { name: "zaphod beeblebrox", occupation: "president of the galaxy" }, { name: "arthur dent", occupation: "a radio employee" }]

// output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// PROCESS:
// Create a function named "arrayCaps" takes in an array of objects, represented by an argument assigned by the function, set in parentheses named "array" and return an array with a sentence about each person with their name capitalized.
// Create a return statement to invoke the argument of "array" (objects).
// Use the '.map' built-in method, which is run by the argument of the function, for every array element and pass in an argument named "object" (represents the objects in the array) in a set of parentheses, enclosed in another set of parentheses which will only run the function for every number element in the array.
// To allow us to write a shorter function, use the arrow function syntax (=>).
// Call on the argument of 'object' appended by a specific object value named ".name" which will run the name of each object key value.
// Then append the value with the '.split()' built-in method followed by a set of parentheses with an enclosed set of quotations making sure to leave a space in between (a seperator to split between words). This will split the string of words into an array of substrings and return a new array.
// Then we append the '.map' built-in method to this test to run the function for each key value in the array and pass in an argument named "value" in a set of parentheses, enclosed in another set of parentheses (to keep adding more code), which this test will provide the name value of the object key. 
// To allow us to continue to write a shorter function, use the arrow function syntax (=>).
// Call on the name value argument and assign the value, using the assignment operator (=) to run the name value and append it with the '.charAt' built-in method that will return a character at a specified index/position. We will add the index of '0' in a set of parentheses as an argument because the index of the first character is zero. 
// To change the letter casing of the character index, we will apend the '.toUpperCase' built-in method because we want to change the first character to a capital letter followed by a set of empty parentheses (parameters are not required with this method).
// Now we want to connect the value to the object key 'occupation by using the addition operator (+) and call of the 'value' argument and append the '.slice()' built-in method, which will start at a selected element in the array so we will pass in the index of '1' as an argument, enclosed by two sets of parentheses (to close out all of the previous logic up to this point) to run this test starting at the second character index. 
// Next, we will append the '.join()' built-in method to join everything back together in the array and pass in quotation marks (seperator) in a set of parentheses, making sure to leave a space in between to join and space in between words.
// To add a sentence to the code, us the addition operator (+) to connect the logic to the sentence. 
// The sentence is called with a string interpolation method to insert different words into the string. We use a set of back-tics syntax (``) define the string, followed by the word 'is' (all the previous logic is only key value names so all we do here is add the key value occupation), a dollar symbol ($) followed by curly braces {}, within the curly braces, call on the initial object key, append the .occupation key value, followed by a period outside of the curly braces to end the sentence, close with the final back-tic and close with the final parentheses. 
// Returns an array with a sentence about each person with their name capitalized.

  const arrayCaps = (array) => {
    return array.map((object) => object.name.split(" ").map((value) => value = (value.charAt(0).toUpperCase() + value.slice(1))).join(" ") + ` is ${object.occupation}.`)
  }

// PASS  ./code-challenges.test.js
//   arrayCaps
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

// Test Suites: 1 passed, 1 total


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//describe(name of function as a string, callback function)
describe("divisibleByThree", () => {

  // Given function of a mixed data array with expected outputs
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]

    //it(description of the function as a string, callback function)
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

    //expect(statement with the function call and jest matcher with the expected output) 
    expect(divisibleByThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divisibleByThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
//   divisibleByThree
//     ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

//   ● divisibleByThree › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//     ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: two mixed data arrays
// output: two arrays of the remainders of the numbers divided by three 

// input:[23, "Heyyyy!", 45, -10, 0, "Yo", false]
// output: [ 2, 0, -1, 0 ]

// input: [5, "Hola", 43, -34, "greetings", true]
// output: [ 2, 1, -1 ]

// PROCESS:
// Create a function named "divisibleByThree" that takes in a mixed data array, represented by an argument assigned by the function, set in parentheses named "arrayNumbers" and return an array of only the REMAINDERS of the numbers when divided by 3.
// Create a return statement to invoke the argument of "arrayNumbers" (numbers).
// Use the '.filter' built-in method which will create a new array, run thru the array and fill it with only the number elements that passes the test assigned by the function. 
// To tell the function which value we want to test from the array, we have to pass an argument named "value" in a set of parentheses enclosed in another set of parentheses. 
// To allow us to write a shorter function, use the arrow function syntax (=>) and use the 'typeof' operator to find the data type we want, then call on the 'value' argument and use the strictly equal operator (===) to return only what we assign the value, then assign the value as a "number" because we only want the numbers returned from the array.
// Use the '.map' built-in method to call on the function for every array element by passing in an argument named "num" (represents only the numbers) in a set of parentheses, enclosed in another set of parentheses which will only run the function for every number element in the array.
// We use an arrow syntax (=>) to continue writing a shorter code and we will call on the "num" argument and use the modulo operator (%) which represents the division remainder value and set it the value of three because we want to return the remainders of the numbers when they are divided by three. 
// Returns an array of only the REMAINDERS of the numbers when divided by 3.

  const divisibleByThree = (arrayNumbers) => {
    return arrayNumbers.filter((value) => typeof value === "number").map((num) => num % 3)
  }

// PASS  ./code-challenges.test.js
// divisibleByThree
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

//describe(name of function as a string, callback function)
describe("arrayCubed", () => {

   // Given function of an array of numbers with expected outputs
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125  

  //it(description of the function as a string, callback function)
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    
  //expect(statement with the function call and jest matcher with the expected output) 
  expect(arrayCubed(cubeAndSum1)).toEqual(99)
  expect(arrayCubed(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// arrayCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// ● arrayCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: arrayCubed is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE
// input: two arrays
// output: two numbers

// input: [2, 3, 4]
// output: 99

// input: [0, 5, 10]
// output: 1125

// PROCESS:
// Create a function named "arrayCubed" that takes in an array of numbers, represented by an argument assigned by the function, set in parentheses named "arrays" and return the sum of all the numbers cubed.
// Create a return statement to invoke the argument of "arrays" (numbers).
// Use the '.reduce' built-in method which will reduce the elements in the array and return only the accumulated single number value from the array. 
// Set the initial value of the function by passing an argument named "sum" (representing the sum of the numbers in the array) and set a value named "number), which represents the number elements in the array that are to be returned.
// To allow us to write a shorter function, use the arrow function syntax (=>) and call on the sum of the numbers by using the addition operator (+) to produce/connect the sum of the numbers cubed.
// Pass in an argument that uses the multiplication operator (*) to multiply each number three times, which represents the numbers cubed.
// Add the index of '0" preceded by a comma (,) and place outside of the math logic to represent the first index number (starting point). 
// Returns the sum of all the numbers cubed.
  
  const arrayCubed = (arrays) => {
    return arrays.reduce((sum, number) => sum + (number * number * number), 0)
}

// PASS  ./code-challenges.test.js
// arrayCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total