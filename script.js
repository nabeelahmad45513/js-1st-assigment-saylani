// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.


// let num1 = +prompt("enter the first number");
// let num2 = +prompt("enter the second number")

// if(num1 > num2){
//     console.log("num1 larger then num2");
// }
// else{
//     console.log("num2 larger then num1");
// }

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// let num = +prompt("enter the number");

// if(num > 0){
//     console.log("the sign is +")
// }else{
//     console.log("the sign is -")
// }

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let num1 = +prompt("enter the number");
// let num2 = +prompt("enter the number");
// let num3 = +prompt("enter the number");
// let num4 = +prompt("enter the number");
// let num5 = +prompt("enter the number");

// let max = num1;

// if(num2 > max){
//     max = num2;
// }
// if(num3 > max){
//     max = num3;
// }
// if(num4 > max){
//     max = num4;
// }
// if(num5 > max){
//     max = num5;
// }

// console.log("the larger number is " + max);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for(let i = 0; i <= 15; i++){
// if(i % 2 == 0){
//     console.log(i + "is even");
// }else{
//     console.log(i + "is odd")
// }
// }

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade

// let marks = [100];

// let totall = 0;
// for(let i = 0; i < marks.length; i++ ){
//     totall += marks[i];
// }
// let average = totall / marks.length;

// let grade;
//  if( average < 60){
//     grade = "F";
//  }
//  else if ( average < 70){
//     grade = "D";
//  }
//  else if ( average < 80){
//     grade = "C";
//   }
//   else if ( average < 90){
//     grade = "B";
//   }else{
//     grade = "A";
//   }
//   console.log("The avarage mark is " + marks + " and the grade is " + grade);

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for(let i = 0; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.

// for(let i = 1; i <= 5; i++){
//     let row = " ";
//     for(let j = 1; j <= i; j++){
//         row = "* ";
//     }
//     console.log(row);
// }