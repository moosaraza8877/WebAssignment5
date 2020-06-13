/* Chapter # 01 */

/* Task 1 */

// alert("Welcome to my Web Page...!");

/* Task 2 */

// alert("Error! Please enter a valid password.");

/* Task 3 */

// alert("Welcome to JS Land..." + "\n" + "Happy Coding!");

/* Task 4 */

// alert("Welcome to JS Land...");
// alert("Happy Coding!" + "\n" + "Prevent this page from creating additional dialogs.");

/* Task 5 */

// var line = "Hello... I can run JS through my web browser's console";
// console.log(line);

/* Task 6 */

// alert("Welcome to my Web Page!");

/* Task 7 */

// In task 6 the script is use.









/* Chapter # 02 */

/* Task 1 */

// var username;

/* Task 2 */

// var myName = "Syed Moosa Raza Rizvi";

/* Task 3 */

// var message = "Hello World";
// alert(message);

/* Task 4 */

// var name = "Jhone Doe";
// var age = "15 years old";
// var designation = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(designation);

/* Task 5 */

// var word = "PIZZA";
// for(var i = 5; i > 0; i--){
//     alert(word + "\n");
//     word = word.slice(0, i - 1);
// }

/* Task 6 */

// var email = "moosaraza8877@gmail.com";
// alert("My email address is " + email);

/* Task 7 */

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

/* Task 8 */

// var msg = "Yah! I can write HTML content through JavaScript";
// document.write(msg);

/* Task 9 */

// alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
// document.write("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");









/* Chapter # 03 */

/* Task 1 */

// var age = 19;
// alert("I am " + age + " years old");

/* Task 2 */

// var noOfvisits = prompt("Enter your visits?");
// alert("You have visited this site " + noOfvisits + " times");

/* Task 3 */

// var birthYear = 2000;
// document.write("My birth year is " + birthYear + "</br>");
// document.write("Data type of my declared variable is number");

/* Task 4 */

// var name = prompt("Enter your name");
// var product = prompt("Enter product title");
// var quantity = +prompt("Enter quantity");
// document.write(name + " ordered " + quantity + " " + product + " on XYZ clothing store");









/* Chapter # 04 */

/* Task 1 */

// var a, b, c;

/* Task 2 */

// var alphabet, numbers, alphabet1, numbers1, variables;      /* --> Legal variables */
// var 1, 2ever, var, @speechSynthesis, 6ven;                  /* --> Illegal varaibles */

/* Task 3 */

// document.write("<b>Rules for naming JS variables</b>" + "</br>");
// document.write("</br>");
// document.write("Variable name can only contain letters, numbers, $ and _." + "\n" + "For example : $my_1stVariable" + "<br/>");
// document.write("Variable must begin with a letter, $ or _." + "\n" + "For example : $name, _name or name" + "<br/>");
// document.write("Variable names are case sensitive" + "<br/>");
// document.write("Variable names should not be JS keywords");









/* Chapter # 05 */

/* Task 1 */

// var firstNumber, secondNumber, result;
// firstNumber = +prompt("Enter first digit");
// secondNumber = +prompt("Enter second digit");
// result = firstNumber + secondNumber;
// document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + result);

/* Task 2 */

/* Subtraction */
// var firstNumber, secondNumber, result;
// firstNumber = +prompt("Enter first digit");
// secondNumber = +prompt("Enter second digit");
// result = firstNumber - secondNumber;
// document.write("Difference of " + firstNumber + " and " + secondNumber + " is " + result);

/* Multiplication */
// var firstNumber, secondNumber, result;
// firstNumber = +prompt("Enter first digit");
// secondNumber = +prompt("Enter second digit");
// result = firstNumber * secondNumber;
// document.write("Product of " + firstNumber + " and " + secondNumber + " is " + result);

/* Division */
// var firstNumber, secondNumber, result;
// firstNumber = +prompt("Enter first digit");
// secondNumber = +prompt("Enter second digit");
// result = firstNumber / secondNumber;
// document.write("Quotient of " + firstNumber + " and " + secondNumber + " is " + result);

/* Modulus */
// var firstNumber, secondNumber, result;
// firstNumber = +prompt("Enter first digit");
// secondNumber = +prompt("Enter second digit");
// result = firstNumber % secondNumber;
// document.write("Remainder of " + firstNumber + " and " + secondNumber + " is " + result);

/* Task 3 */

// var math;
// document.write("Value after variable declaration is " + math + "<br/>");
// math = 5;
// document.write("Initial Value: " + math + "<br/>");
// math++;
// document.write("Value after increment is: " + math + "<br/>");
// math = math + 7;
// document.write("Value after addition is: " + math + "<br/>");
// math--;
// document.write("Value after decrement is: " + math + "<br/>");
// math = math % 3;
// document.write("The remainder is: " + math);

/* Task 4 */

// var ticketprice = 600;
// var finalPrice = ticketprice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + finalPrice + "PKR");

/* Task 5 */

// var number = +prompt("Enter any number to see its multiples");
// document.write("Table of " + number + "</br>");
// for(var i = 1; i <= 10; i++){
//     document.write(number + " x " + i + " = " + number * i + "</br>");
// }

/* Task 6 */

// var celsius = +prompt("Enter temperature in Celsius");
// var result1 = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + result1 + "°F" + "</br>");
// var fahrenheit = +prompt("Enter temperature in Fahrenheit");
// var result2 = (fahrenheit - 32) * (5 / 9);
// document.write(fahrenheit + "°F is " + result2 + "°C" + "</br>");

/* Task 7 */

// var priceItem1, priceItem2, quantity1, quantity2, shipCharges, result1, result2, sum;
// priceItem1 = 650;
// priceItem2 = 100;
// shipCharges = 100;
// quantity1 = +prompt("Enter the quantity of item 1");
// quantity2 = +prompt("Enter the quantity of item 2");
// result1 = priceItem1 * quantity1;
// result2 = priceItem2 * quantity2;
// sum = result1 + result2 + shipCharges;
// document.write("<b>Shopping Cart</b>" + "</br>");
// document.write("</br>");
// document.write("Price of item 1 is " + priceItem1 + "</br>");
// document.write("Quantity of item 1 is " + quantity1 + "</br>");
// document.write("Price of item 2 is " + priceItem2 + "</br>");
// document.write("Quantity of item 2 is " + quantity2 + "</br>");
// document.write("Shipping Charges " + shipCharges + "</br>");
// document.write("</br>");
// document.write("Total cost of your order is " + sum);

/* Task 8 */

// var totalMarks, obtainedMarks, percentage;
// totalMarks = +prompt("Enter total marks");
// obtainedMarks = +prompt("Enter your obtained marks");
// percentage = (obtainedMarks * 100) / totalMarks;
// document.write("<b>Marks Sheet</b>" + "</br>");
// document.write("</br>");
// document.write("Total marks: " + totalMarks + "</br>");
// document.write("Marks obtained: " + obtainedMarks + "</br>");
// document.write("Percentage: " + percentage + "%");

/* Task 9 */

// var dollars, riyals, pakRupees;
// dollars = 10;
// riyals = 25;
// pakRupees = (dollars * 104.80) + (riyals * 28);
// document.write("<b>Currency in PKR</b>" + "</br>");
// document.write("</br></br>");
// document.write("Total Currency in PKR: " + pakRupees);

/* Task 10 */

// var arithmeticOperations = 2;
// arithmeticOperations = ((arithmeticOperations + 5) * 10) / 2;   /* Verified Expression */

/* Task 11 */

// var currentYear, birthYear, age;
// currentYear = +prompt("Enter Current Year");
// birthYear = +prompt("Enter Birth Year");
// age = currentYear - birthYear;
// document.write("<b>Age Calculator</b>" + "</br>");
// document.write("</br>");
// document.write("Current Year: " + currentYear + "</br>");
// document.write("Birth Year: " + birthYear + "</br>");
// document.write("Your Age is: " + age);

/* Task 12 */

// var radius, circum, area;
// const pi = 3.142;
// radius = +prompt("Enter radius of circle");
// circum = 2 * pi * radius;
// area = pi * (radius * radius);
// document.write("<b>The Geometrizer</b>" + "</br>");
// document.write("</br>");
// document.write("Radius of a circle: " + radius + "</br>");
// document.write("The circumference is: " + circum + "</br>");
// document.write("The area is: " + area);

/* Task 13 */

// var snack, currentAge, maxAge, estimateSnack, ageDiff, finalSnack;
// snack = prompt("Enter your favorite snack");
// currentAge = +prompt("Enter your current age");
// maxAge = +prompt("Enter your estimated maximum age");
// estimateSnack = +prompt("Enter your estimated amount of snack per day");
// ageDiff = maxAge - currentAge;
// finalSnack = ageDiff * estimateSnack;
// document.write("<b>The Lifetime Supply Calculator</b>" + "</br>");
// document.write("</br>");
// document.write("Favourite Snack: " + snack + "</br>");
// document.write("Current age: " + currentAge + "</br>");
// document.write("Estimated Maximum Age: " + maxAge + "</br>");
// document.write("Amount of snacks per day: " + estimateSnack + "</br>");
// document.write("You will need " + finalSnack + " " + snack + " to last you until the ripe old age of " + maxAge);









/* Chapter # 06 - 09 */

/* Task 1 */

// var a = +prompt("Enter any number");
// document.write("<b>Result:</b>" + "</br>");
// document.write("The value of a is: " + a + "</br>");
// document.write("</br>");
// document.write("............................................");
// document.write("</br>");
// document.write("</br>");
// ++a;
// document.write("The value of ++a is: " + a + "</br>");
// document.write("Now the value of a is: " + a + "</br>");
// document.write("</br>");
// document.write("</br>");
// document.write("The value of a++ is: " + a + "</br>");
// a++;
// document.write("Now the value of a is: " + a + "</br>");
// document.write("</br>");
// document.write("</br>");
// --a;
// document.write("The value of --a is: " + a + "</br>");
// document.write("Now the value of a is: " + a + "</br>");
// document.write("</br>");
// document.write("</br>");
// document.write("The value of a-- is: " + a + "</br>");
// a--;
// document.write("Now the value of a is: " + a);

/* Task 2 */

// var a, b, exp;
// a = 2;
// b = 1;
// exp = "--a - --b + ++b + b--";
// document.write("a is: " + a + "</br>");
// document.write("b is: " + b + "</br>");
// document.write("The expression is: " + exp + "</br>")
// document.write("</br>");
// document.write("</br>");
// document.write("At the stage of --a value is: " + --a + "</br>");
// document.write("At the stage of --a - --b value is: " + a + " - " + --b + "</br>");
// document.write("At the stage of ++b value is: " + ++b + "</br>");
// document.write("At the stage of ++b + b-- value is: " + b + " + " + b + "</br>");
// document.write("After solving all the expression, we get " + (a - ++b + b + b));

/* Task 3 */

// var name = prompt("Enter your name");
// document.write("<b>Hello </b>" + "<b>" + name + "</b>" + "<b>! Welcome to my Website</b>");

/* Task 4 */

// Question is not mentioned.

/* Task 5 */

// var number = +prompt("Enter any number to see its multiples");
// if(number == " "){
//     document.write("<b>Table of 5 is displayed by default</b>" + "</br>");
//     document.write("</br>");
//     for(var i = 1; i <= 10; i++){
//         document.write("5 x " + i + " = " + 5 * i + "</br>");
//     }
// }
// else{
//     document.write("<b>Table of </b>" + "<b>" + number + "</b>" + "</br>");
//     document.write("</br>");
//     for(var i = 1; i <= 10; i++){
//         document.write(number + " x " + i + " = " + number * i + "</br>");
//     }
// }

/* Task 6 */

// var subj1, subj2, subj3, obtain1, obtain2, obtain3, percent1, percent2,  /* Isko Check krna hai */
//     percent3, finalObtainmarks, finalPercent;
// const totalMarks = 100;
// const finalTotalmarks = 300;
// subj1 = prompt("Enter name of subject 1");
// subj2 = prompt("Enter name of subject 2");
// subj3 = prompt("Enter name of subject 3");
// obtain1 = +prompt("Enter obtained marks of " + subj1);
// obtain2 = +prompt("Enter obtained marks of " + subj2);
// obtain3 = +prompt("Enter obtained marks of " + subj3);
// percent1 = (obtain1 * totalMarks) / 100;
// percent2 = (obtain2 * totalMarks) / 100;
// percent3 = (obtain3 * totalMarks) / 100;
// finalObtainmarks = obtain1 + obtain2 + obtain3;
// finalPercent = (finalObtainmarks * 100) / finalTotalmarks;
// document.write("<b>Subject</b>" + " "  + "<b>Total Marks</b>" + " " + "<b>Obtained Marks</b>" + " " + "<b>Percentage</b>" + "</br>");
// document.write(subj1 + " " + totalMarks + " " + obtain1 + " " + percent1 + "%" + "</br>");
// document.write(subj2 + " " + totalMarks + " " + obtain2 + " " + percent2 + "%" + "</br>");
// document.write(subj3 + " " + totalMarks + " " + obtain3 + " " + percent3 + "%" + "</br>");
// document.write(finalTotalmarks + " " + finalObtainmarks + " " + finalPercent + "%");









/* Chapter # 09 - 11 */

/* Task 1 */

// var cityName = prompt("Enter your city name");
// if(cityName === "Karachi" || cityName === "karachi"){
//     document.write("<b>Welcome to city of lights</b>");
// }
// else{
//     document.write("Thanks for visiting");
// }

/* Task 2 */

// var gender = prompt("Please enter your gender");
// if(gender === "Male" || gender === "male" || gender === "M" || gender === "m"){
//     document.write("<b>Good Morning Sir.</b>")
// }
// else{
//     document.write("<b>Good Morning Ma'am.</b>")
// }

/* Task 3 */

// var signalColor = prompt("Enter signal color");
// if(signalColor === "Red" || signalColor === "red"){
//     document.write("<b>Your entered signal color is: </b>" + signalColor + "</br>");
//     document.write("<b>Message:</b> Must Stop");
// }
// else if(signalColor === "Yellow" || signalColor === "yellow"){
//     document.write("<b>Your entered signal color is: </b>" + signalColor + "</br>");
//     document.write("<b>Message:</b> Ready to move");
// }
// else{
//     document.write("<b>Your entered signal color is: </b>" + signalColor + "</br>");
//     document.write("<b>Message:</b> Move now");
// }

/* Task 4 */

// var remainingFuel = +prompt("Enter the remaining fuel in car");
// if(remainingFuel < 0.25){
//     document.write("Your current fuel is: " + "<b>" + remainingFuel + " litres" + "</b>" + "</br>");
//     document.write("Message: <b>Please refill the fuel in your car</b>");
// }
// else{
//     document.write("Your current fuel is: " + "<b>" + remainingFuel + " litres" + "</b>" + "</br>");
//     document.write("Message: <b>Go ahead, you have enough fuel</b>");
// }

/* Task 5 */

// var a = 4;
// if(++a === 5){
//     alert("Given condition for variable a is true");
//     alert("1st output is displayed"); //Records for output
// }

// var b = 82;
// if(b++ === 83){
//     alert("Given condition for variable b is true");
// }

// var c = 12;
// if(c++ === 13){
//     alert("Condition 1 is true");
// }
// if(c === 13){
//     alert("Condition 2 is true");
//     alert("2nd output is displayed"); //Records for output
// }
// if(++c < 14){
//     alert("Condition 3 is true");
// }
// if(c === 14){
//     alert("Condition 4 is true");
//     alert("3rd output is displayed"); //Records for output
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost === materialCost + laborCost){
//     alert("The cost equals");
//     alert("4th output is displayed"); //Records for output
// }

// if(true){
//     alert("True");
//     alert("5th output is displayed"); //Records for output
// }

// if(false){
//     alert("False");
// }

// if("car" < "cat"){
//     alert("Car is smaller then Cat");
//     alert("6th output is displayed"); //Records for output
// }

/* Task 6 */

// var course1, course2, course3, totMarks, percentage, grade, remarks;
// course1 = +prompt("Enter obtained marks in course 1");
// course2 = +prompt("Enter obtained marks in course 2");
// course3 = +prompt("Enter obtained marks in course 3");
// totMarks = +prompt("Enter total marks for all courses");
// percentage = ((course1 + course2 + course3) * 100) / totMarks;
// if(percentage >=80 && percentage <= 100){
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(percentage >= 70 && percentage < 80){
//     grade = "A";
//     remarks = "Good";
// }
// else if(percentage >= 60 && percentage < 70){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else{
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<b>Marks Sheet</b>" + "</br>" + "</br>" + "</br>");
// document.write("Total marks: " + "<b>" + totMarks + "</b>" + "</br>");
// document.write("Marks obtained: " + "<b>" + (course1 + course2 + course3) + "</b>" + "</br>");
// document.write("Percentage: " + "<b>" + percentage + "%" + "</b>" + "</br>");
// document.write("Grade: " + "<b>" + grade + "</b>" + "</br>");
// document.write("Remarks: " + "<b>" + remarks + "</b>");

/* Task 7 */

// var secretNumber, guess;
// secretNumber = 7;
// guess = +prompt("Guess secret number ranges from 1 to 10");
// if(guess === secretNumber){
//     document.write("<b>Bingo! Correct answer</b>");
// }
// else if(guess + 1 === secretNumber){
//     document.write("<b>Close enough to the correct answer</b>");
// }
// else{
//     document.write("<b>Sorry! Your guessed number is far from secret number</b>");
// }

/* Task 8 */

// var number = +prompt("Enter any number and see whether it is divisible by 3 or not");
// if((number % 3) === 0){
//     document.write("Your number is: " + "<b>" + number + "</b>" + "</br>");
//     document.write("Message: " + "<b>Your number is completely divisible by 3</b>");
// }
// else{
//     document.write("Your number is: " + "<b>" + number + "</b>" + "</br>");
//     document.write("Message: " + "<b>Your number is not divisible by 3, Please try again!</b>");
// }

/* Task 9 */

// var number = +prompt("Enter any number and see whether it is even or odd");
// if((number % 2) === 0){
//     document.write("Your number is: " + "<b>" + number + "</b>" + "</br>");
//     document.write("Message: " + "<b>It is even number</b>");
// }
// else{
//     document.write("Your number is: " + "<b>" + number + "</b>" + "</br>");
//     document.write("Message: " + "<b>It is odd number</b>");
// }

/* Task 10 */

// var temperature = +prompt("Please enter temperature");
// if(temperature >= 10 && temperature < 20){
//     document.write("Message: " + "<b>OMG! Today's weather is so Cool.</b>");
// }
// else if(temperature >= 20 && temperature < 30){
//     document.write("Message: " + "<b>Today's weather is Cool.</b>");
// }
// else if(temperature >= 30 && temperature < 40){
//     document.write("Message: " + "<b>The Weather today is Normal.</b>");
// }
// else if(temperature >= 40){
//     document.write("Message: " + "<b>It is too hot outside.</b>");
// }
// else{
//     document.write("Message: " + "<b>Irrelevant temperature.</b>");
// }

/* Task 11 */

// var firstNumber, secondNumber, operation, result;
// firstNumber = +prompt("Enter first number");
// secondNumber = +prompt("Enter second number");
// operation = prompt("Enter operation");
// if(operation === "+"){
//     result = firstNumber + secondNumber;
// }
// else if(operation === "-"){
//     result = firstNumber - secondNumber;
// }
// else if(operation === "*"){
//     result = firstNumber * secondNumber;
// }
// else if(operation === "/"){
//     result = firstNumber / secondNumber;
// }
// else if(operation === "%"){
//     result = firstNumber % secondNumber;
// }
// document.write("<b>Simple Calculator</b>" + "</br>" + "</br>" + "</br>");
// document.write(firstNumber + " " + operation + " " + secondNumber + " = " + result);









/* Chapter # 12 - 13 */

/* Task 1 */

// var char;
// char = prompt("Enter any character or number");
// for(var i = 65; i <= 90; i++){
//     if(char.charCodeAt(0) === i){
//         document.write("<b>Match found, It is a uppercase letter.</b>");
//         break;
//     }   
// }
// for(var j = 97; j <= 122; j++){
//     if(char.charCodeAt(0) === j){
//         document.write("<b>Match found, It is a lowercase letter.</b>");
//         break;
//     }
// }
// for(var k = 48; k <= 57; k++){
//     if(char.charCodeAt(0) === k){
//         document.write("<b>Match found, It is a numeric character.</b>");
//         break;
//     }
// }

/* Task 2 */

// var firstNumber, secondNumber;
// firstNumber = +prompt("Enter first digit");
// secondNumber = +prompt("Enter second digit");
// document.write("<b>Comparing Program</b>" + "</br>" + "</br>");
// if(firstNumber === secondNumber){
//     document.write("<b>Both integers are equals.</b>");
// }
// else if(firstNumber > secondNumber){
//     document.write("<b>Integer one is greater than integer two.</b>");
// }
// else{
//     document.write("<b>Integer two is greater than integer one.</b>");
// }

/* Task 3 */

// var number = +prompt("Enter any number and see whether it is positive, negative or zero");
// if(number === 0){
//     document.write("<b>Your number is zero!</b>");
// }
// else if(number < 0){
//     document.write("<b>Your number is negative!</b>");
// }
// else{
//     document.write("<b>Your number is positive!</b>");
// }

/* Task 4 */

// var alphabet = prompt("Enter any single alphabet and see whether it is vowel or not");
// if(alphabet.charCodeAt(0) === 97 || alphabet.charCodeAt(0) === 101 || alphabet.charCodeAt(0) === 105 || alphabet.charCodeAt(0) === 111 || alphabet.charCodeAt(0) === 117){
//     document.write("<b>True! It is a Vowel.</b>");
// }
// else if(alphabet.charCodeAt(0) === 65 || alphabet.charCodeAt(0) === 69 || alphabet.charCodeAt(0) === 73 || alphabet.charCodeAt(0) === 79 || alphabet.charCodeAt(0) === 85){
//     document.write("<b>True! It is a Vowel.</b>");
// }
// else{
//     document.write("<b>False! It is not a Vowel.</b>");
// }

/* Task 5 */

// var originalPassword, inputPassword;
// originalPassword = "Google123";
// inputPassword = prompt("Enter password");
// if(inputPassword === ""){
//     document.write("<b>Please enter your password</b>");
// }
// else if(originalPassword === inputPassword){
//     document.write("<b>Correct! The password you entered matches the original password</b>");
// }
// else{
//     document.write("<b>InCorrect! You entered wrong password</b>");
// }

/* Task 6 */

// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }
// alert(greeting);    // In this there is a mistak of curly bracket in else block.

/* Task 7 */

// var time = +prompt("Please enter time in 24-hours clock format: like 1900 = 7pm");
// if(time >= 0000 && time < 1200){
//     document.write("<b>Good morning!</b>");
// }
// else if(time >= 1200 && time < 1700){
//     document.write("<b>Good afternoon!</b>");
// }
// else if(time >= 1700 && time < 2100){
//     document.write("<b>Good evening!</b>");
// }
// else if(time >= 2100 && time < 2359){
//     document.write("<b>Good night!</b>");
// }
// else{
//     document.write("<b>Please enter time in valid mentioned format</b>");
// }









/* Chapter # 14 - 16 */

/* Task 1 */

// var names = [];

/* Task 2 */

// var names0 = "Object";

/* Task 3 */

// var strings = ["My", "name", "is", "Moosa", "Raza"];

/* Task 4 */

// var numbers = [1, 2, 3, 4, 6];

/* Task 5 */

// var boolean = [true, false];

/* Task 6 */

// var mixedArray = [1, true, "Hello World", "Good bye!"];

/* Task 7 */

// var educationQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<b>Qualifications</b>" + "<br>" + "<br>");
// for(var i = 0; i < educationQualification.length; i++){
//     document.write("<b>" + (i + 1) + ") " + educationQualification[i] + "</b>" + "<br>");
// }

/* Task 8 */

// var studNames = [];
// var scores = [];
// var percentage = [];
// var totalMarks = 500;
// for(var i = 0; i < 3; i++){
//     studNames[i] = prompt("Enter your name");
//     scores[i] = +prompt("Enter your obtained marks out of 500");
//     percentage[i] = (scores[i] * 100) / totalMarks;
// }
// for(var j = 0; j < 3; j++){
//     document.write("Score of " + studNames[j] + " is " + scores[j] + ".  Percentage: " + percentage[j] + "%" + "<br>");
// }

/* Task 9 */

// var colorNames = ["Red", "Green", "Blue", "Yellow"];
// var colorAdd, position, number;
// document.write("<b>Color Names</b>" + "<br>" + "<br>");
// for(var i = 0; i < colorNames.length; i++){
//     document.write(colorNames[i] + "<br>");
// }

// function addColorStart(){
//     colorAdd = prompt("Enter any color name which you want to add in the beginning of this array");
//     colorNames.unshift(colorAdd);
//     document.write("<b>Color Names</b>" + "<br>" + "<br>");
//     for(var j = 0; j < colorNames.length; j++){
//         document.write(colorNames[j] + "<br>");
//     }
// }

// function addColorEnd(){
//     colorAdd = prompt("Enter any color name which you want to add in the end of this array");
//     colorNames.push(colorAdd);
//     document.write("<b>Color Names</b>" + "<br>" + "<br>");
//     for(var j = 0; j < colorNames.length; j++){
//         document.write(colorNames[j] + "<br>");
//     }
// }

// function addTwoColorstart(){
//     for(var k = 0; k < 2; k++){
//         colorAdd = prompt("Enter any color name which you want to add in the beginning of this array");
//         colorNames.unshift(colorAdd);
//     }
//     document.write("<b>Color Names</b>" + "<br>" + "<br>");
//     for(var j = 0; j < colorNames.length; j++){
//         document.write(colorNames[j] + "<br>");
//     }
// }

// function deleteFirstColor(){
//     colorNames.shift();
//     document.write("<b>Color Names</b>" + "<br>" + "<br>");
//     for(var j = 0; j < colorNames.length; j++){
//         document.write(colorNames[j] + "<br>");
//     }
// }

// function deleteLastColor(){
//     colorNames.pop();
//     document.write("<b>Color Names</b>" + "<br>" + "<br>");
//     for(var j = 0; j < colorNames.length; j++){
//         document.write(colorNames[j] + "<br>");
//     }
// }

// function addColorOwnPosition(){
//     position = +prompt("Enter the position you want to add the color");
//     colorAdd = prompt("Enter the color name you want to add");
//     colorNames.splice((position - 1), 0, colorAdd);
//     document.write("<b>Color Names</b>" + "<br>" + "<br>");
//     for(var j = 0; j < colorNames.length; j++){
//         document.write(colorNames[j] + "<br>");
//     }
// }

// function deleteColorOwnPosition(){
//     position = +prompt("Enter the position you want to add the color");
//     number = +prompt("How many color you want to delete");
//     colorNames.splice((position - 1), number);
//     document.write("<b>Color Names</b>" + "<br>" + "<br>");
//     for(var j = 0; j < colorNames.length; j++){
//         document.write(colorNames[j] + "<br>");
//     }
// }

/* Task 10 */

// var scores = [];
// for(var i = 0; i < 5; i++){
//     scores[i] = +prompt("Enter the score of student " + (i + 1));
// }
// document.write("<b>Scores of Students:</b> ");
// for(var j = 0; j < 5; j++){
//     document.write(scores[j] + ", ");
// }
// document.write("<br>");
// scores.sort();
// document.write("<b>Ordered Scores of Students:</b> ");
// for(var k = 0; k < 5; k++){
//     document.write(scores[k] + ", ");
// }

/* Task 11 */

// var citiesName = ["Karachi", "Islamabad", "Lahore", "Peshawar", "Quetta", "Bahawalpur", "Sargodha"];
// var selectedCities = [];
// document.write("<b>Cities list:</b>" + "<br>");
// for(var i = 0; i < citiesName.length; i++){
//     document.write(citiesName[i] + ", ");
// }
// document.write("<br><br>");
// document.write("<b>Selected cities list:</b>" + "<br>");
// selectedCities = citiesName.slice(0, 3);
// for(var j = 0; j < selectedCities.length; j++){
//     document.write(citiesName[j] + ", ");
// }

/* Task 12 */

// var arr = ["This", "is", "my", "cat"];
// var string = [];
// document.write("<b>Array:</b>" + "<br>");
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + ", ");
// }
// document.write("<br><br>");
// string = arr.join(" ");
// document.write("<b>String:</b>" + "<br>");
// document.write(string);

/* Task 13 */

// var values = [];
// for(var i = 0; i < 4; i++){
//     values[i] = prompt("Enter any string");
// }
// document.write("<b>Devices:</b>" + "<br>");
// for(var j = 0; j < 4; j++){
//     document.write(values[j] + ", ");
// }
// document.write("<br><br>");
// for(var k = 0; k < 4; k++){
//     document.write("<b>Out:</b>" + "<br>");
//     var afterShift = values.shift();
//     document.write(afterShift + "<br>");
// }

/* Task 14 */

// var values = [];
// for(var i = 0; i < 4; i++){
//     values[i] = prompt("Enter any string");
// }
// document.write("<b>Devices:</b>" + "<br>");
// for(var j = 0; j < 4; j++){
//     document.write(values[j] + ", ");
// }
// document.write("<br><br>");
// for(var k = 0; k < 4; k++){
//     document.write("<b>Out:</b>" + "<br>");
//     var afterShift = values.pop();
//     document.write(afterShift + "<br>");
// }

/* Task 15 */

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
  
//   // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
// if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
// }









/* Chapter # 17 - 20 */

/* Task 1 */

// var multiDimensionalArray = [[],[],[],[]];

/* Task 2 */

// var multiDimension = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// var final = [];
// for(var j = 0; j < 3; j++){
//     final[j] = multiDimension[j].join(" ");
// }
// for(var i = 0; i < 3; i++){
//     document.write(final[i] + "<br>");
// }

/* Task 3 */

// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>");
// }

/* Task 4 */

// var number, length;
// number = +prompt("Enter a number to show its multiplication table");
// length = +prompt("Enter length multiplication table");
// document.write("<b>Multiplication table of " + number + "</b>" + "<br>");
// document.write("<b>Length " + length + "</b>" + "<br>" + "<br>");
// for(var i = 1; i <= length; i++){
//     document.write(number + " x " + i + " = " + number * i + "<br>");
// }

/* Task 5 */

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br><br>");
// for(var j = 0; j < fruits.length; j++){
//     document.write("Element at index " + j + " is " + fruits[j] + "<br>");
// }

/* Task 6 */

// document.write("<b>Counting:</b>" + "<br><br>");
// for(var i = 1; i <= 15; i++){
//     if(i === 15){
//         document.write(i);
//     }
//     else{
//         document.write(i + ", ");
//     }
// }
// document.write("<br><br>");
// document.write("<b>Reverse counting:</b>" + "<br><br>");
// for(var i = 10; i >= 1; i--){
//     if(i === 1){
//         document.write(i);
//     }
//     else{
//         document.write(i + ", ");
//     }
// }
// document.write("<br><br>");
// document.write("<b>Even:</b>" + "<br><br>");
// for(var i = 0; i <= 20; i = i + 2){
//     if(i === 20){
//         document.write(i);
//     }
//     else{
//         document.write(i + ", ");
//     }
// }
// document.write("<br><br>");
// document.write("<b>Odd:</b>" + "<br><br>");
// for(var i = 1; i < 20; i = i + 2){
//     if(i === 19){
//         document.write(i);
//     }
//     else{
//         document.write(i + ", ");
//     }
// }
// document.write("<br><br>");
// document.write("<b>Series:</b>" + "<br><br>");
// for(var i = 2; i <= 20; i = i + 2){
//     if(i === 20){
//         document.write(i + "k");
//     }
//     else{
//         document.write(i + "k" + ", ");
//     }
// }

/* Task 7 */

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var index;
// for(var i = 0; i < A.length; i++){
//     if(order === A[i]){
//         index = i;
//     }
// }
// if(index === undefined){
//     document.write("We are sorry. " + order + " is <b>not available</b> in our bakery");
// }
// else{
//     document.write(order + " is <b>available</b> at index " + index + " in our bakery");
// }

/* Task 8 */

// var array = [];
// var search;
// for(var i = 0; i < 5; i++){
//     array[i] = +prompt((i + 1) + ". Enter number and at the end see which number is largest one");
// }
// document.write("<b>Array items:</b> ");
// for(var i = 0; i < array.length; i++){
//     if((i + 1) === array.length){
//         document.write(array[i]);
//     }
//     else{
//         document.write(array[i] + ", ");
//     }
// }
// document.write("<br>");
// search = array[0];
// for(var i = 1; i < array.length; i++){
//     if(search < array[i]){
//         search = array[i];
//     }
// }
// document.write("<b>The largest number is </b>" + search);

/* Task 9 */

// var array = [];
// var search;
// for(var i = 0; i < 5; i++){
//     array[i] = +prompt((i + 1) + ". Enter number and at the end see which number is largest one");
// }
// document.write("<b>Array items:</b> ");
// for(var i = 0; i < array.length; i++){
//     if((i + 1) === array.length){
//         document.write(array[i]);
//     }
//     else{
//         document.write(array[i] + ", ");
//     }
// }
// document.write("<br>");
// search = array[0];
// for(var i = 1; i < array.length; i++){
//     if(search > array[i]){
//         search = array[i];
//     }
// }
// document.write("<b>The smallest number is </b>" + search);

/* Task 10 */

// for(var i = 5; i <= 100; i = i + 5){
//     if(i === 100){
//         document.write(i);
//     }
//     else{
//         document.write(i + ", ");
//     }
// }



/* THE END */