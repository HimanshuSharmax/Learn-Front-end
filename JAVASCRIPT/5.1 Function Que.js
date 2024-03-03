//! 1. WAP to calculate sum of even and odd digits of a specific number
function calculateSums(num) {
     let sumEven = 0;
     let sumOdd = 0;
 
     for (let i = 0; i < num.length; i++) {
         if (num[i] % 2 === 0) {  // Even
             sumEven += num[i];
         } else {
             sumOdd += num[i];   // odd
         }
     }
 
     console.log("Sum of even: " + sumEven);
     console.log("Sum of odd: " + sumOdd);
 }
 
 let num = [4,2,5,93,8,22];
 calculateSums(num);


//! 2. WAP to reverse a number
function reverseNum(num){
    let rev = 0;
    while(num!=0){
        r = num % 10;
        rev = rev * 10 + r;
        num = parseInt(num/10);
    }
    return rev;
}

console.log(reverseNum(234));

//! 3. WAP to print factorial of any specific number
let n = 5;
function factorial(n) { 
	if (n === 0) { 
		return 1; 
	} 
	else { 
		return n * factorial(n - 1); 
	} 
} 

console.log(factorial(n));


//! 4. WAP to print fibonacci Series:
function FibonacciSeries(num) {
     let a = 0; 
     let b = 1;
     let sum = a + b;
     let series = `${a} ${b}`;
     
     while (sum <= num) {
         series += ` ${sum} `;
         a = b;
         b = sum;
         sum = a + b;
     }
     return series;
 }
 
console.log((FibonacciSeries(10)));
 
