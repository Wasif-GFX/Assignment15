function checkCharacter(input) {
    // Check if input is a number
    if (!isNaN(input)) {
        console.log(input + " is a number.");
    } 
    // Check if input is an uppercase letter
    else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
        console.log(input + " is an uppercase letter.");
    } 
    // Check if input is a lowercase letter
    else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
        console.log(input + " is a lowercase letter.");
    } 
    // If none of the above, it's an invalid input for this check
    else {
        console.log(input + " is neither a number nor a letter.");
    }
}

// Test cases
checkCharacter('A'); // Uppercase letter
checkCharacter('a'); // Lowercase letter
checkCharacter('5'); // Number
checkCharacter('*'); // Neither



function compareIntegers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("Both numbers are equal.");
    }
}

// Test cases
compareIntegers(10, 20); // 20 is larger
compareIntegers(30, 15); // 30 is larger
compareIntegers(25, 25); // Both are equal


function checkNumber() {
    // Prompt the user to enter a number
    let num = parseFloat(prompt("Enter a number:"));

    if (num > 0) {
        console.log(num + " is a positive number.");
    } else if (num < 0) {
        console.log(num + " is a negative number.");
    } else {
        console.log("The number is zero.");
    }
}

// Call the function to check the number
checkNumber();


function isVowel(char) {
    // Convert the input to lowercase for case-insensitive comparison
    char = char.toLowerCase();

    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(isVowel('A')); // true
console.log(isVowel('b')); // false
console.log(isVowel('e')); // true
console.log(isVowel('z')); // false


function validatePassword() {
    // a. Store correct password in a JS variable
    let correctPassword = "mySecretPassword123";

    // b. Ask user to enter his/her password
    let userPassword = prompt("Enter your password:");

    // c.i. Check if user has entered password
    if (!userPassword) {
        console.log("Please enter your password.");
    }
    // c.ii. Check if both passwords are same
    else if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } 
    else {
        console.log("Incorrect password.");
    }
}

// Call the function to validate the password
validatePassword();


var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);



function convertTime() {
    // Prompt the user to enter the time in 24-hour format
    let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

    // Check if the input is within the valid 24-hour time range
    if (time >= 0 && time < 2400) {
        let hours = Math.floor(time / 100);
        let minutes = time % 100;
        let period = "AM";

        // Adjust for PM times
        if (hours >= 12) {
            period = "PM";
            if (hours > 12) {
                hours -= 12;
            }
        } else if (hours === 0) {
            hours = 12; // Midnight case
        }

        // Format the minutes with leading zero if necessary
        minutes = minutes < 10 ? "0" + minutes : minutes;

        // Display the converted time
        console.log("The time is " + hours + ":" + minutes + " " + period);
    } else {
        console.log("Invalid time. Please enter a time between 0000 and 2359.");
    }
}

// Call the function to convert the time
convertTime();


// Chapter 10: If Statements

var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}


if (x === y) {
    let z = prompt("Enter the value of z:");
    let anotherVariable = z;
}


if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}


if (x === 1) {
    x = 2;
}



Chapter 10: If Statements
Fixing the if statement

javascript
Copy code
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}
Explanation: In JavaScript, = is used for assignment, and === is used for comparison. The if (city === "Karachi") ensures the condition is evaluated correctly.
Complete the statement:

javascript
Copy code
if (x === y) {
    let z = prompt("Enter the value of z:");
    let anotherVariable = z;
}
Explanation: If x equals y, the program prompts the user to input the value of z, then assigns that value to another variable.
Check if ZipCode is "10010"

javascript
Copy code
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}
Test a variable and assign a new value:

javascript
Copy code
if (x === 1) {
    x = 2;
}

// Chapter 11: Comparison Operators+

if (x !== y) {
    // Your code here
}

if (x >= y) {
    // Your code here
}

if (x !== 5) {
    x = 10;
}

if (x !== 10) {
    alert("Congratulations!");
}

let firstName = prompt("Enter your first name:");
if (firstName !== "John") {
    alert("No match");
}


// Chapter 12: If...Else and Else If Statements

if (x >= y) {
    alert("x is greater than or equal to y");
} else {
    alert("x is less than y");
}

let marks = parseFloat(prompt("Enter your marks:"));
let percentage = (marks / 100) * 100;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

let city = prompt("Enter your city:");
if (city === "Karachi") {
    alert("It's Karachi");
} else if (city === "Lahore") {
    alert("It's Lahore");
} else {
    alert("Unknown city");
}

// Chapter 13: Testing Sets of Conditions

if (a === b && c === d) {
    // Your code here
}

if (a === b || c !== d) {
    // Your code here
}

if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    // Your code here
}

let num1 = 5;
let num2 = 10;

if (num1 < num2 || num1 > num2) {
    alert("Numbers are not equal");
}

let firstName = "John";
let lastName = "Doe";

let inputFirstName = prompt("Enter your first name:");
let inputLastName = prompt("Enter your last name:");

if (inputFirstName === firstName && inputLastName === lastName) {
    alert("Name matches!");
}


Chapter 10: If Statements
Fixing the if statement

javascript
Copy code
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}
Explanation: In JavaScript, = is used for assignment, and === is used for comparison. The if (city === "Karachi") ensures the condition is evaluated correctly.
Complete the statement:

javascript
Copy code
if (x === y) {
    let z = prompt("Enter the value of z:");
    let anotherVariable = z;
}
Explanation: If x equals y, the program prompts the user to input the value of z, then assigns that value to another variable.
Check if ZipCode is "10010"

javascript
Copy code
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}
Test a variable and assign a new value:

javascript
Copy code
if (x === 1) {
    x = 2;
}
Chapter 11: Comparison Operators
Test if two variables are unequal:

javascript
Copy code
if (x !== y) {
    // Your code here
}
Test if one variable is greater than or equal to another:

javascript
Copy code
if (x >= y) {
    // Your code here
}
Test whether a variable is unequal to a particular number:

javascript
Copy code
if (x !== 5) {
    x = 10;
}
Test whether a number is unequal to a different number:

javascript
Copy code
if (x !== 10) {
    alert("Congratulations!");
}
Prompt asking for your first name and test inequality:

javascript
Copy code
let firstName = prompt("Enter your first name:");
if (firstName !== "John") {
    alert("No match");
}
Chapter 12: If...Else and Else If Statements
Test if one variable is greater than or equal to another:

javascript
Copy code
if (x >= y) {
    alert("x is greater than or equal to y");
} else {
    alert("x is less than y");
}
Marksheet using if, else if, and else:

javascript
Copy code
let marks = parseFloat(prompt("Enter your marks:"));
let percentage = (marks / 100) * 100;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
If statement with else:

javascript
Copy code
if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}
Prompt "to enter a city with multiple conditions":

javascript
Copy code
let city = prompt("Enter your city:");
if (city === "Karachi") {
    alert("It's Karachi");
} else if (city === "Lahore") {
    alert("It's Lahore");
} else {
    alert("Unknown city");
}
Chapter 13: Testing Sets of Conditions
Test if both conditions are true:

javascript
Copy code
if (a === b && c === d) {
    // Your code here
}
Test if either or both conditions are true:

javascript
Copy code
if (a === b || c !== d) {
    // Your code here
}
Test multiple conditions:

javascript
Copy code
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    // Your code here
}
Test if a number is less than or greater than another:

javascript
Copy code
let num1 = 5;
let num2 = 10;

if (num1 < num2 || num1 > num2) {
    alert("Numbers are not equal");
}
Test first and last name:

javascript
Copy code
let firstName = "John";
let lastName = "Doe";

let inputFirstName = prompt("Enter your first name:");
let inputLastName = prompt("Enter your last name:");

if (inputFirstName === firstName && inputLastName === lastName) {
    alert("Name matches!");
}
// Chapter 14: If Statements (Nested)

let password = prompt("Enter your password:");
if (password !== "") {
    if (password.length <= 5) {
        alert("Password must be greater than 5 characters");
    } else {
        alert("OK");
    }
}

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

if (a === 1 && c === "Max") {
    alert("OK");
}

let x = 10;
let y = 10;

if (x === y) {
    if (x <= y) {
        alert("x is equal to y and x is less than or equal to y");
    }
}
