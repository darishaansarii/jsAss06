// ------------------------------------------CHAPTER 21-25---------------------------------------------------------------

// // Question 01:
// var firstName = prompt("Ënter your first name:");
// var lastName = prompt("Ënter your last name:");
// var fullName = firstName+" "+lastName;
// alert(`Hello ${fullName}!`);

// // Question 02:
// var phoneModel = prompt("Write your favourite mobile phone model:");
// document.write(`My favorite phone is: ${phoneModel}<br>Length Of String is: ${phoneModel.length}`);

// // Question 03:
// var nationality = "Pakistani";
// for(var i=0; i<nationality.length; i++) {
//     if(nationality.slice(i, i+1) === "n") {
//         document.write(`<br><br>String: ${nationality}<br>Index of 'n': ${i}<b><b>`);
//     }
// }

// // Question 04:
// var str="Hello World";
// document.write(`String: ${str}<br>Last index of 'l': ${str.lastIndexOf('l')}<br><br>`);

// // Question 05:
// var nationality="Pakistani";
// document.write(`String: ${nationality}<br>Character at index 3 is: ${nationality.charAt(3)}<br><br>`);

// // Question 06:
// var firstName = prompt("Ënter your first name:");
// var lastName = prompt("Ënter your last name:");

// var fullName=firstName.concat(" ", lastName);
// alert(`Hello ${fullName}!`);

// // Question 07:
// var city="Hyderabad";
// var replaceCity = city.replace("Hyder" , "Ïslam");
// document.write(`City: ${city}<br>After replacement: ${replaceCity}.<br><br>`);

// // Question 08:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMessage = message.replaceAll("and", "&");
// document.write(`Message: ${message}<br>After replacement: ${replaceMessage}.<br><br.`);

// // Question 09:
// var str="472";
// var number = Number(str);
// document.write(`Value: ${str}<br>Type: ${typeof(str)}<br>Value: ${number}<br>Type: ${typeof(number)}.<br><br>`);

// // Question 10:
// var str=prompt("Enter any string:");
// document.write(`User Input: ${str}<br>Uppercase: ${str.toUpperCase()}<br><br>`);

// // Question 11:
// var str=prompt("User input:"), word='';
// var firstLetter = str[0].toUpperCase();
// for(var i=1; i<str.length; i++) {
//     var remainLetters=str[i].toLowerCase();
//     word += remainLetters;
// }
// document.write(`User Input: ${str}<br>Title Case: ${firstLetter+word}.<br><br>`);

// // Question 12:
// var num=35.36;
// document.write(`Number: ${num}<br>Result: ${num.toString().replace('.', '')}<br><br>`);

// // Question 13:
// var name=prompt("Enter your name:"), flag=0;
// for(var i=0; i<name.length; i++) {
//     if(name.slice(i, i+1) === "!" || name.slice(i, i+1) === "." || name.slice(i, i+1) === "," || name.slice(i, i+1) === "@") {
//         flag = 1;
//     }
// }

// if(flag===1) {
//     alert("Please enter a valid user name!");
// }

// // Question 14:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Search any food item:"), flag=1;
// for(var i=0; i<A.length; i++) {
//     if(userInput.toLowerCase() === A[i]) {
//         itemName=A[i];
//         itemIndex=i;
//         flag=0;
//         break;
//     }
//     else {
//         flag=1;
//     }
// }

// if(flag===0) {
//     document.write(`${itemName} is <b>available</b> at index ${itemIndex} in our bakery.<br><br>`);
// }
// else {
//     document.write(`We are sorry, ${userInput} is <b>not available</b> in our bakery. <br><br>`);
// }

// // Question 15:
// var password=prompt("Enter your password:"), hasAlphabet=false, hasDigit=false, condition1=false, condition2=false, condition3=false;
// for(var i=0; i<password.length; i++) {
//     var charCode = password.charCodeAt(i);

//     if((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)){
//         hasAlphabet=true;
//     }
//     if(charCode>=48 && charCode<=57) {
//         hasDigit=true;
//     }
// }
// document.write(`Entered passowrd: ${password}<br>`);
// if(hasAlphabet==true && hasDigit==true) {
//     condition1=true;
// }
// else {
//     document.write(`Password must contain alphabets & digits.<br>`);
// }

// var firstCharCode=password.charCodeAt(0);
// if(firstCharCode>=48 && firstCharCode<=57) {
//     document.write(`Password must not contain digit as first letter.<br>`);
// }
// else {
//     condition2=true;
// }

// if(password.length>=6) {
//     condition3=true;
// }
// else {
//     document.write(`Password should be at least 6 characters.<br><br>`)
// }

// if(condition1===false || condition2===false || condition3===false) {
//     document.write(`Enter a valid password.<br><br>`);
// }

// // Question 16:
// var university="University of Karachi";

// var words = university.split('');

// for(var i=0; i<words.length; i++) {
//     document.write(`${words[i]}<br>`);
// }

// // Question 17:
// var userInput=prompt("Enter any input:");
// var lastCharIndex = userInput.length-1;
// document.write(`<br>User Input: ${userInput}<br>Last charcter of user input: ${userInput[lastCharIndex]}<br><br>`);

// // Question 18:
// var text="The quick brown fox jumps over the lazy dog.", occurrence=0;

// for(var i=0; i<text.length; i++) {
//     if(text.toLowerCase().slice(i, i+3) === "the") {
//         occurrence++;
//     }
// }

// document.write(`There are ${occurrence} occurrence(s) of word "the".<br><br>`);


// ----------------------------------------------------CHAPTER 26-30--------------------------------------------------

// // Question 01:
// var posFloat=+prompt("Enter a positive floating point:");
// document.write(`Number: ${posFloat}<br>Round off value: ${Math.round(posFloat)}<br>Floor value: ${Math.floor(posFloat)}<br>Ceil value: ${Math.ceil(posFloat)}<br><br>`);

// // Question 02:
// var negFloat=+prompt("Enter a negative floating point:");
// document.write(`Number: ${negFloat}<br>Round off value: ${Math.round(negFloat)}<br>Floor value: ${Math.floor(negFloat)}<br>Ceil value: ${Math.ceil(negFloat)}<br><br>`);

// // Question 03:
// var num=+prompt("Ënter a -ve number:");
// document.write(`The absolute value of ${num} is: ${Math.abs(num)}<br><br>`);

// // Question 04:
// var dice=Math.random()*6;
// document.write(`The random value of dice is: ${Math.round(dice)}<br><br>`);

// // Question 05:
// var coin=Math.random()*2;
// var roundCoin=Math.round(coin);
// if(roundCoin===0) {
//     coin=Math.random()*2;
//     roundCoin=Math.round(coin);
// }
// else if(roundCoin===1) {
//     coinRes="Tails";
// }
// else {
//     coinRes="Heads";
// }
// document.write(`${roundCoin}<br>The random value of coin is: ${coinRes}<br><br>`);

// // Question 06:
// var rand=(Math.random() * 100) +1;
// document.write(`Random number between 1 and 100: ${Math.round(rand)}.<br><br>`);

// // Question 07:
// var userWeight=prompt("Enter your weight:");

// var updatedWeight = userWeight.replace("kgs", " kilograms");

// document.write(`Your weight is: ${updatedWeight}.<br><br>`);

// Question 08:
var hidden=(Math.random()*10)+1;

var userGuess=+prompt("Guess the number between 1 to 10:");

if(userGuess === Math.round(hidden)) {
    alert("Congratulations! You guessed the hidden number :)");
}