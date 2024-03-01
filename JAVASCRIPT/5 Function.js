/**
 * function:
 * function is a building block on any program by which we can divide
 * our large program into small parts
 * 
 * Advantages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability 

Note1: a function can't access variables defined in other function
       directly to do so we have to use concept of arguments and
       return value
Note2: a function can access variables defines in global scope
       and vice versa not true

 * types of functions on basis of arguments and return value
 * 1. function without return value without parameter
 * 2. function with return value without parameter
 * 3. function without return value with parameter
 * 4. function with return value with parameter

syntax:
    function functionName(paramerters){
        --------
        --------
        number of Statements
        --------
        --------
        return returned_value
    }
    functionName(arguments)
 */


//sample function
function test(){
    console.log("In test function")
}
console.log("In main Scope")
test()
console.log("Back to main Scope")


// function call within function
function fun1(){
    console.log("In fun1 function")
    fun2()
    console.log("Back to fun1 function")
}
function fun2(){
    console.log("In fun2 function")
    fun3()
    console.log("Back to fun2 function")
}
function fun3(){
    console.log("In fun3 function")
}
console.log("In main Scope")
fun1()
console.log("Back to main Scope")

//! 1. function without return value without parameter
function add(){
    var a = 10
    var b = 20
    var sum = a+b
    console.log("sum = ",sum)
}
function sample(){
    add()
}
sample()


//! 2. function with return value without parameter
function add(){
    var a = 10
    var b = 20
    var sum = a+b
    return sum
}
function sample(){
    console.log("sum = ",add())
}
function sample(){
    var s = add()
    console.log("sum = ",s)
}
sample() 


//! 3. function without return value with parameter
function add(x,y){          //parameters or formal parameters
    var sum = x+y
    console.log("sum = ",sum)
}
function sample(){
    var a = 10
    var b = 20
    add(a,b)                //arguments or actual parameter
}
sample()


//! 4. function with return value with parameter
function add(x,y){          
    var sum = x+y
    return sum
}
function sample(){
    var a = 10
    var b = 20
    let s = add(a,b)                
    console.log("sum = ",s)
}
sample()


//! Palindrome function
function isPalindrome(n) {
    let rev = 0
    let num = n                 //12321
    while (num != 0) {          //12321     1232      123         12            1               0
        let r = num % 10        //1         2         3           2             1
        rev = rev * 10 + r      //0*10+1=1  1*10+2=12 12*10+3=123 123*10+2=1232 1232*10+1=12321
        num = parseInt(num / 10)//1232      123       12          1             0
    }
    return rev === n ? `${n} is Palidrome` : `${n} is not Palidrome`
}
console.log(isPalindrome(12345))
console.log(isPalindrome(12321))
console.log(isPalindrome(12341))
console.log(isPalindrome(1221))
console.log(isPalindrome(12521))


//!default parameters
function sample(a = 0, b = 0, c = 0) {
    console.log(`a = ${a} b = ${b} c = ${c}`)
}
sample(10, 20, 30)
sample(10, 20)
sample(10)
sample()


//! function returing an Array
function test(){
    return [10,20,30,40,50]
}
console.log(test())


//! regular function
function test(){
    console.log("In test function")
}
test()

function add(x,y){
    return x+y
}
console.log(add(10,20))


//!anonymous function
var test = function(){
    console.log("In test function")
}
test()

var add = function(x,y){
    return x+y
}
console.log(add(10,20))


//!arrow function or fat arrow function
var test = ()=>console.log("In test function")
test()

var add = (x,y)=>x+y
console.log(add(10,20))

//storage class
/**
var             function level
let             block level
const           block level
no keyword      global
 */


function test(){
     if(true){
         a = 10          //Global Variable
         var b = 20      //Function Level Variable
         let c = 30      //Block Level Variable {}
         const d = 40    //Block Level Variable {}
         console.log(`In if block of test() a = ${a} b = ${b} c = ${c} and d = ${d}`)
     }
     console.log(`In if block of test() a = ${a} b = ${b}`)
 }
 test()
 console.log(`In if block of test() a = ${a}`)

 function sample(){
     console.log(`In sample a = ${a}`)
 }
 sample()
 
 
 
//! Recursion: when function call itself

var a = 0                       // Global var
function test(){
    ++a
    console.log("In test()")
    if(a<5)
    test()
    console.log("Back to test()")
}
console.log("In main Scope")
test()
console.log("Back to  main Scope")



function test(a){
    ++a
    console.log("In test()")
    if(a<5)
    test(a)
    console.log("Back to test()")
}
console.log("In main Scope")
test(0)
console.log("Back to  main Scope")

// Factorial using recursion
function fact(num){
    if(num<=1)
    return 1 
    else
    return num*fact(num-1)
}
console.log(fact(5))
console.log(fact(10))
