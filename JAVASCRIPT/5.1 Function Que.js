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
 

//! 5. WAP to check whether a number is prime number or not
function isPrime(num) {
     if (num < 2) {
         return `${num} is not Prime`;
     }
 
     for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) {
             return `${num} is not Prime`;
         }
     }
 
     return `${num} is Prime`;
 }
 
console.log(isPrime(13));
console.log(isPrime(66));


//! 6. WAP to check whether a number is NEON number or not (1,9)
function isNeonNumber(number) {
    let square = number * number;
    let digitSum = 0;

    while (square > 0) {
        digitSum = digitSum + square % 10;
        square = parseInt(square / 10);
    }

    return digitSum === number;
}

const Number = 9;
if (isNeonNumber(Number)) {
    console.log(`${Number} is a Neon number.`);
} else {
    console.log(`${Number} is not a Neon number.`);
}


//! 7. WAP to check whether a number is Armstrong number or not  (1,153,370,371,407)
function Armstrong(number) {
    const numStr = String(number);
    const numDigits = numStr.length;

    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum = sum + Math.pow(digit, numDigits);
    }

    return sum === number;
}

const number = 153; 
if (Armstrong(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}

//! 8. WAP to check whether a number is Palindrome Number or not (121,1234321)
function palindromeNum(num) {
     let rem, temp, final = 0;
     temp = num;
     while(num > 0){
          rem = num % 10;
          num = parseInt(num / 10);
          final = final * 10 + rem;
     }
     if(final == temp){
          console.log(`${temp} is Palindrome Number!`);
     }else{
          console.log(`${temp} is not Palindrome Number!`);
     }
}

palindromeNum(121)
palindromeNum(5688)
