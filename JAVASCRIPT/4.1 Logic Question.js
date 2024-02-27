1. // WAP to check whether a Year is Leap Year or Not
var year = Number(prompt("Enter the Year Number : "))
if(year%100==0){
    if(year%400==0)
    document.write(`${year} is a Leap Year`)
    else
    document.write(`${year} is not a Leap Year`)
}
else{
    if(year%4==0)
    document.write(`${year} is a Leap Year`)
    else
    document.write(`${year} is not a Leap Year`)
}

2. //  WAP to calculate sum of even and odd digits of a specific number



3. // WAP to check whether a number is prime number or not
var num = Number(prompt("Enter the Number : "))
var flag = false
for(let i=2;i<=num**0.5;i++){
    if(num%i==0){
        flag = true
        break
    }
}
if(flag==false && num>=2)
document.write(`${num} is Prime`)
else
document.write(`${num} is not Prime`)


4. // Factorial of Number



5. //fibonacci Series: 0   1   1   2   3   5   8   13  21  34  .....
var num = Number(prompt("Enter the Last Term Range : "))
var a = 0
var b = 1
var sum = a+b
document.write(`${a} ${b} `)
while(sum<=num){
    document.write(`${sum} `)
    a = b
    b = sum
    sum = a+b
}

6. //  WAP to reverse a number
var num = parseInt(prompt("Enter the Number : "))
var rev = 0
while (num != 0) {          //1234      123         12          1               0          
    let r = num % 10        //4         3           2           1
    rev = rev * 10 + r      //0*10+4=4  4*10+3=43   43*10+2=432 432*10+1=4321
    num = parseInt(num / 10)//123       12          1           0
}
document.write(`Reverse = ${rev}`)



7. // WAP to check whether a number is perfect square number or not
var num = Number(prompt("Enter the Number : "))
var n = parseInt(num**0.5)
if(n*n==num)
document.write(`${num} is Perfect Square Number`)
else
document.write(`${num} is not a Perfect Square Number`)



8. // WAP to check perfect numbers(6,28,496,8128) (6-> sum>=1+2+3=6  divisor of 6=>1,2,3  num==sum)
let nums = Number(prompt("Enter number: "));
let sums = 0;
for(let i = 1; i <= nums/2; i++){
    if(nums % i == 0){
        sums = sum + i;
    }
}
if(nums == sums){
    console.log(`${nums} is perfect number`);
}else{
    console.log(`${nums} is not perfect number`);
}



9. //WAP to print and count all armstrong numbers(153,370,371,407) 
// 153-> 1*1*1 + 5*5*5 + 3*3*3 = 153
var start = Number(prompt("Enter the Range\nStart From : "))
var end = Number(prompt("To : "))

for (let i = start; i <= end; i++) {
    // let d = num.toString().length
    let d = 0 
    let num = i
    while (num != 0) {
        d++
        num = parseInt(num / 10)
    }
    num = i
    let sum = 0
    while(num!=0){
        let r = num%10
        sum = sum+r**d
        num = parseInt(num/10)
    }
    if(sum==i)
    document.write(`${i}<br>`)
}



10. // WAP to print and count all palindrome numbers in a range
let num =  121;
let OriginalNum = num;
let rev = 0;

while(num != 0){
    rev = (rev * 10) + (num % 10)
    num = parseInt(num / 10)
}

if(OriginalNum == rev){
    console.log(`${rev} is palindrome`);
}else{
    console.log(`${rev} is not palindrome`);
}



11. // WAP to print all magical Numbers (81,1458,1729)
for(let i = 1;i<=2000;i++){
     let sum = 0
     let num = i                 //1458
     while(num!=0){              //1458  145     14      1       0
         let r = num%10          //8     5       4       1
         sum = sum+r             //0+8=8 8+5=13  13+4=17 17+1=18
         num = parseInt(num/10)  //145   14      1       0
     }
     let rev = 0
     num = sum                   //18        
     while(num!=0){              //18        1           0
         let r = num%10          //8         1
         rev = rev*10+r          //0*10+8=8  8*10+1=81
         num = parseInt(num/10)  //1         0
     }
     if(sum*rev===i)
     console.log(i)
 }
