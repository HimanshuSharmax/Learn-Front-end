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
