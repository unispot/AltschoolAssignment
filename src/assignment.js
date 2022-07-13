// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
const myNumbers = []
for (let i = 1; i < 6; i++) {
  myNumbers.push(i) //populating arrayOfNumbers
}
function sumOfNumbers(Numbers) {
  let count = 0;
  for (let k = 0; k < Numbers.length; k++) {
    count += Numbers[k];
  }
    return count;
}
assignment.sumOfNumbers = sumOfNumbers;
/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
const arrayOfNumbers = []
for (let i = 1; i < 100; i++) {
  arrayOfNumbers.push(i) //populating arrayOfNumbers
}

evenCount = 0;
function countEvenNumbers(arrayOfNumbers) {
  for (let k = 0; k < arrayOfNumbers.length + 1 ; k++)   {
    if(arrayOfNumbers[k] % 2 == 0){
      evenCount++;
    }
  }
    return evenCount;
}
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
const celciusArray = [25, 37, 100];
const FahrenArray = [];
function celsiusToFahrenheit(celciusArray) {
  for (let i = 0; i < celciusArray.length; i++) {
    let celciusItem = celciusArray[i];
    let degreeFahrenheit = (celciusItem *(9/5)) + 32
    FahrenArray.push(Math.trunc(degreeFahrenheit));
  }
    return FahrenArray;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

