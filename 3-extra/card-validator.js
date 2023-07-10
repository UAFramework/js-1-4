/*- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.
- Use `node` from the command line to test if your code works as expected.*/

function cardValidation(num) {
    //The line below take the argument num with type "number" and create array with elements of each number of argument
    //Argument num and array numArray have the same length
    let numArray = num.toString().split("").map(a => +a);
    //The line below checks if at least one validation rule is violated. If so, return false
    if(numArray.length !== 16
    || numArray.every((element) => element === numArray[0])
    || numArray[numArray.length - 1] % 2 === 1
    || numArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) <= 16) {
        return false;
    } else {
        return true;
    }
}