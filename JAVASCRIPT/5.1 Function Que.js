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
