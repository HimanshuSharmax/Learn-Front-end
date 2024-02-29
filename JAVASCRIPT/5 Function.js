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
