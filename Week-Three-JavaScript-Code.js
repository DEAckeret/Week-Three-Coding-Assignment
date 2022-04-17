// This is Dustin Ackeret's week three coding assignment.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

const lastElement = ages.pop();
const firstElement = ages.shift();

var newAge = lastElement - firstElement;

console.log(newAge);

/* The first and last element have been taken out of the array, 
subtracted, and printed to the console. Its value has become 90 
and named 'newAge' */

ages.push(newAge);

const lastElementTwo = ages.pop();
const firstElementTwo = ages.shift();

var newAge = lastElementTwo - firstElementTwo;

console.log(newAge);
ages.push(newAge);

/* newAge was pushed back into the array. The same steps 
to subtract the first and last element were replicated. 

newAge value was 90 but after it was popped from the array and 
subtracted, its new assigned value has become 81. The value 81
has been pushed back into the array. */

let elementAverage = 0;

for (let i = 0; i < ages.length; i++) {
    elementAverage += ages[i]; 
}

var trueAverage = elementAverage / ages.length;
console.log(Math.round(trueAverage));

// trueAverage came out to 34.33333... I came back and rounded the answer to 34.//

let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];

let collectiveNames = 0

for (let i = 0; i < names.length; i++){
    collectiveNames += names[i].length;
}
let totalLetterCount = collectiveNames / names.length

console.log(Math.round(totalLetterCount));

/* The names have been iterated through in the loop and the lengths collected into collectiveNames.
with the variable totalLetterCount the average length has been calculated to 3.83... I decided
to use Math.round to make it a whole integer. */

let concatedNames = 0

for (let i = 0; i < names.length; i++){
    concatedNames += names[i] + " ";
}

console.log(concatedNames);

/* 

1. How do you access the last element of any array? 

I use the .pop method

2. How do you access the first element of any array?

For this I use the .shift method. The methods, .slice and .splice can also 
access the first and last element if you select the appropriate index 
.slice(0, 1); or .slice(number to start slice, number to end slice); Slice
will not change the affected array but splice will.

*/

const nameLengths = [];

var stringLengths = 0;
// stringLengths is being used to push values to the array nameLengths.

for (let i = 0; i < names.length; i++){
    stringLengths += names[i].length
    nameLengths.push(stringLengths)
    stringLengths = 0;
}

console.log(nameLengths); 

// A new array of the numbered lengths of names has been made. Now those numbers will be summed up.

var collectedValues = 0;

for (let i = 0; i < names.length; i++){
    collectedValues += nameLengths[i];
}
console.log(collectedValues);

// The total sum was 23. 

repeatedWord = function(word, n){
    return word.repeat(n);
}

console.log(repeatedWord('Hello', 3));
// Prints 'HelloHelloHello'

fullName = function(firstName, lastName){
    return firstName + " " + lastName;
}

console.log(fullName('Dustin', 'Ackeret'));
// Prints my name with a space.

var manyNumbers = [5, 12, 33, 65, 74];

let greaterThan = manyNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}) > 100;
console.log(greaterThan);
// Prints true. Accumulates, 189. 

let averageArray = manyNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
}) / manyNumbers.length;
console.log(averageArray);
// Prints average which is 37.8

var arrayOne = [1, 3, 5, 7];
var arrayTwo = [2, 4, 6, 8];
var arrayOneValues = 0;
var arrayTwoValues = 0;

function greaterArray(arrOne, arrTwo){
    
    for (let i = 0; i < arrOne.length; i++){
        arrayOneValues += arrOne[i];
    }arrayOneValues / arrOne.length;
    
    for (let i = 0; i < arrTwo.length; i++){
        arrayTwoValues += arrTwo[i];
    }arrayTwoValues / arrTwo.length;

    return arrOne > arrTwo;
}

console.log(greaterArray(arrayOne, arrayTwo));
// Prints false. arrayTwo has a larger average. 

var cashOnHand = 20.00;
var hot = true; 

function willBuyDrink(isHotOutside, moneyInPocket){
    return isHotOutside == true && moneyInPocket >= 10.50;
}
console.log(willBuyDrink(hot, cashOnHand));
/* Both values return true. Thus willBuyDrink returns true. Will return 
false if hot was not true or if cashOnHand was not >= 10.50. */

var thisArray = [1, 3, 4, 5, 8, 11, 15, 20, 21, 22, 23];

function arrayAway(elements){
return elements >= 20;
}

let largerNumbers = thisArray.filter(arrayAway);
let printedNumbers = 0;

for (let i = 0; i < largerNumbers.length; i++){
    printedNumbers += largerNumbers[i];
}

console.log(printedNumbers / largerNumbers.length);

/* This function removes any element below 20 to any array that is ran through
arrayAway AND is accompanied by the method .filter. The console.log allows us to
find the average of all elements left that are 20 or above. In this instance, 
the average turned out to 21.5 */