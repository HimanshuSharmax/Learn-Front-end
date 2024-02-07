//! Que for calculating simple interest
var p = 200000;
var r = 12.5;
var t = 5;
var si = p * r * t / 100;
var total = si + p;
var emi = total / (t * 12);

console.log("Principal Amount = ",p);
console.log("Rate = ",r);
console.log("Time = ",t);
console.log("Simple Interest = ",si);
console.log("Total Amount = ",total);
console.log("Emi = ",emi.toFixed(2));


//! Swap two numbers
var a = 10
var b = 20
console.log(`Before swapping a = ${a} and b = ${b}`)    
        //a = 10    b = 20
a=a+b   //a = 30    b = 20
b=a-b   //a = 30    b = 10
a=a-b   //a = 20    b = 10
console.log(`After swapping a = ${a} and b = ${b}`)


//! For Taking user input Using prompt
//* prompt() return string after reading from user

//* Number()    :   convert input value(argument) into a number
//* parseInt()  :   convert input value(argument) into a number(integer)
//* parseFloat():   convert input value(argument) into a number(float)

var a = Number(prompt("Enter the first Number"));
var b = Number(prompt("Enter the second Number"));
var sum = a+b;
document.write(`${a} + ${b} = ${sum}`);


//! simple interest using prompt
var p = Number(prompt("Enter the Principal Amount : "))
var r = Number(prompt("Enter the Rate : "))
var t = Number(prompt("Enter the Time : "))
var si = p * r * t / 100
var total = si + p
var emi = total / (t * 12)
document.write(`
    Principal Amount = ${p}<br>
    Rate             = ${r}<br>
    Time             = ${t}<br>
    Simple Interest  = ${si.toFixed(2)}<br>
    Total Amount     = ${total.toFixed(2)}<br>
    EMI Amount       = ${emi.toFixed(2)}
`)


//! WAP to cal area of circle
let radius = +prompt("Enter radius of circle");
const pi = 3.14;
let area = pi * radius * radius;
document.write(`Area of circe is ${area}.`)
