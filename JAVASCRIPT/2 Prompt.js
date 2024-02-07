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


