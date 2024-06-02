/*
JavaScript:1995

ECMA Script:
    ES2 :   1997
    ES3 :   1998
    ES4 :   1999
    ES5 :   2009
    ---------------------------
    ES6 :   2015
    ECMA Script 2016
    ECMA Script 2017
    ECMA Script 2018
    ECMA Script 2019
    ECMA Script 2020
    ECMA Script 2021
    ECMA Script 2022
    ECMA Script 2023
*/

/*
ES6 new Features:
    1. let
    2. const
    3. Arrow function
    4. MAP
    5. SET
    6. FOR OF
    7. classes
    8. Promises
    9. Default Parameters
    10. string.include()
    11. string.startswith()
    12. string.endswith()
    13. Destructuring
    14. rest and spread operator(...)
    15. Template Literals String
        `a = ${a}`
    16. Generators
    17. Async/await
    18. Array.from()
    19. Array.keys(),Array.values(),Array.entries()
    20. Array.find()
    21. Array.findIndex()
    22. New Math Methods
    23. Number Properties
    24. New Number Methods
    25. New Global Methods
    26. Iterables Object.entries
    27. JavaScript Modules
    28. use strict
 */


//!   Rest Operator: --
// allows a function to accept an indefinte  number of arguments as an array 

function test(a,b,...x){
    console.log(`a = ${a} b = ${b} x = ${x}`)
}
test(10,20)
test(10,20,30)
test(10,20,30,40)
test(10,20,30,40,50)
test(10,20,30,40,50,60)
test(10,20,30,40,50,60,70)
test(10,20,30,40,50,60,70,80)
test(10,20,30,40,50,60,70,80,90)
test(10,20,30,40,50,60,70,80,90,100)


//!  spread operator: --
/*
    Spread operator allows an iterable to expand
    in places where 0+ arguments are expected. It is mostly used
    in the variable array where there is more than 1 values are 
    expected. It allows us the privilege to obtain a list of
    parameters from an array. Syntax of Spread operator is same as 
    Rest parameter but it works completely opposite of it.
*/

function test(a,b,c,d,e){
    console.log(`a = ${a} b = ${b} c = ${c} d = ${d} = ${e}`)
}
var arr = [10,20,30,40,50]
test(...arr)



var emp1 = {
    id:1001,
    name:"Nitin Chauhan",
    dsg:"Trainer",
    salary:135000
} 

// var emp2 = emp1      copy all data and when 1 change 2 itself change
var emp2 = {...emp1}    // ...spread op, can't chg value

console.log(emp1)
console.log(emp2)

emp2.salary = 150000
console.log(emp1)
console.log(emp2)


//! Generators : --
/*
    In ECMAScript 2015, A generator is a process that can be paused and 
    resumed and can yield multiple values. A generator in JavaScript 
    consists of a generator function, which returns an iterable Generator object
*/


function* test(){
    console.log("Hello World1")
    yield 1
    console.log("Hello World2")
    yield 2
    console.log("Hello World3")
    yield 3
    console.log("Hello World4")
    yield 4
    console.log("Hello World5")
    yield 5
}
for(let item of test()){
    console.log(item)
}

/*
New Math Methods
ES6 added the following methods to the Math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()


New Number Properties
ES6 added the following properties to the Number object:

EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER

New Number Methods
ES6 added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()

New Global Methods
ES6 added 2 new global number methods:

isFinite()
isNaN()
 */
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

/*
    ECMAScript 2016:
    JavaScript Exponentiation (**)
    JavaScript Exponentiation assignment (**=)
    JavaScript Array.prototype.includes
 */



//!     ECMAScript 2017: --->
/*
    JavaScript String padding
    JavaScript Object.entries
    JavaScript Object.values
    JavaScript Object.keys
    JavaScript async functions
    JavaScript shared memory
 */

//! JavaScript String padding  --
var a = "Ducat Education Noida"
console.log(a.padStart(50,"-"))
console.log(a.padEnd(50,"-"))

var emp = [
     {id:1001,name:"Nitin Chauhan",dsg:"Trainer",salary:135000,city:"Faridabad",state:"Haryana"},
     {id:1002,name:"Deepka Singh Gusain",dsg:"Trainer",salary:135000,city:"Faridabad",state:"Haryana"},
     {id:1003,name:"Deepak Gupta",dsg:"Trainer",salary:135000,city:"Faridabad",state:"Haryana"},
     {id:1004,name:"Sachin",dsg:"Manager",salary:235000,city:"Gaya",state:"Bihar"},
     {id:1005,name:"Satyam Dixit",dsg:"Trainer",salary:135000,city:"Noida",state:"UP"}
 ]
 console.log("Id      Name                 Designation  Salary     City            State")
 for(let item of emp){
     console.log(item.id.toString().padEnd(7," "),item.name.padEnd(20," "),item.dsg.padEnd(12," "),item.salary.toString().padEnd(10," "),item.city.padEnd(15," "),item.state)
 }
 


//Object.keys(),Object.values(),Object.enteries()
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:135000,
//     city:"Faridabad",
//     state:"Haryana"
// }
// console.log(Object.keys(emp))
// console.log(Object.values(emp))
// console.log(Object.entries(emp))


//!     ECMAScript 2018 --->
/*
    Asynchronous Iteration
    Promise Finally
    Object Rest Properties
    New RegExp Features
*/


//! Asynchronous Iterations --
async function* test(){
    setTimeout(()=>{
        console.log("Hello World1")
    },1000)
    yield 1
    setTimeout(()=>{
        console.log("Hello World2")
    },2000)
    yield 2
    setTimeout(()=>{
        console.log("Hello World3")
    },3000)
    yield 3
    setTimeout(()=>{
        console.log("Hello World4")
    },4000)
    yield 4
    setTimeout(()=>{
        console.log("Hello World5")
    },5000)
    yield 5
}
async function sample(){
    for await (let item of test()){
        console.log(item)
    }
}
sample()


//! Promise finally
var p = new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("Promise is Resolved")
        rej("Promise is Rejected")
    },2000)
})
p
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finally Called")           // called every time in res,rej
})


//! Object Rest Properties
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 135000,
    city: "Faridabad",
    state: "Haryana"
}
var {id,name,...x} = emp
console.log(id,name,x)



//!     ECMAScript 2019 --->
/*
    Array.prototype.{flat,flatMap}
    Object.fromEntries
    String.prototype.{trimStart, trimEnd}
    Well-formed JSON.stringify
    Function.prototype.toString
    Symbol.prototype.description
*/

//! Array Flat --
var a = [[10,20,30],40,[50,60,70],[80,90,100]]
console.log(a.flat(1))
console.log(a.flat(1).map((x)=>x*5))

var a = [[[10,20,30],40],[[50,60,70],[80,90,100]]]
console.log(a.flat(2))
console.log(a.flat(2).map((x)=>x*5))

var a = [[[[10,20,30],40],[[50,60,70],[80,90,100]]]]
console.log(a.flat(3))
console.log(a.flat(3).map((x)=>x*5))

var a = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[10,20,30],40],[[50,60,70],[80,90,100]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
while(true){
    let flag = false
    for(let item of a){
        if(Number.isNaN(item*5)){
            a = a.flat(1)
            flag = true
        }
    }
    if(flag===false)
    break
}
console.log(a)


//! flatMap()
var a = [10,20,30,40,50,60,70,80,90,100]
console.log(a.map((x)=>[x*5]))
console.log(a.flatMap((x)=>[x*5]))

console.log(a.map((x)=>[[x*5]]))
console.log(a.flatMap((x)=>[[x*5]]))


//! Object.fromEnteries()
var a = [["id",1001],["name","Nitin Chauhan"],["dsg","Trainer"],["salary",135000],["city","Faridabad"],["state","Haryana"]]
console.log(Object.fromEntries(a))



//!  ECMAScript 2020 --->
/*
 BigInt
 Nullish Coalescing
 Optional Chaining
 Promise.allSettled

 global This
 String#matchAll        //regex
 Module Namespace Exports
 import.meta
 Dynamic import

 Well defined for-in order
 */



//! BigInt
var a = Number.MAX_SAFE_INTEGER*500000
console.log(a)

var a = 12345678901011121314151617181920n
console.log(a)

var num = 5000n
var f = 1n
for(let i=1n;i<=num;i++){
    f=f*i
}
console.log(f)


/*
 Nullish Coalescing(??)
    syntax:
        statement1??statemnet2

    this operator execute second statement only if first statement result is undefined or null else only first statement will execute
*/

10||console.log("Hello World1")
-10||console.log("Hello World2")
"Nitin"||console.log("Hello World3")
false||console.log("Hello World4")
0||console.log("Hello World5")
""||console.log("Hello World6")
undefined||console.log("Hello World7")
null||console.log("Hello World8")

10??console.log("Hello World1")
-10??console.log("Hello World2")
"Nitin"??console.log("Hello World3")
false??console.log("Hello World4")
0??console.log("Hello World5")
""??console.log("Hello World6")
undefined??console.log("Hello World7")
null??console.log("Hello World8")


// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     active:false
// }
// console.log(emp.id??"N/A")
// console.log(emp.name??"N/A")
// console.log(emp.dsg??"N/A")
// console.log(emp.active??"N/A")
// console.log(emp.salary??"N/A")


//! Optional Chaining
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    active: false
}
console.log(emp.id)
console.log(emp.name)
console.log(emp.dsg)
console.log(emp.active)
console.log(emp?.address?.city)


//! Promise.allSettled
var p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise1 is Resolved")
        rej("Promise1 is Rejected")
    },2000)
})
var p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("Promise2 is Resolved")
        rej("Promise2 is Rejected")
    },3000)
})
var p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise3 is Resolved")
        rej("Promise3 is Rejected")
    },5000)
})

Promise.allSettled([p1,p2,p3])
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

//! ECMA 2021 --->
//logical short Hand Operator i.e a=a&&b i.e a&&=b
//numeric separation    i. 1_000_000

// console.log(10_00_000)

//! promise any
var p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise1 is Resolved")
        rej("Promise1 is Rejected")
    },6000)
})
var p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise2 is Resolved")
        rej("Promise2 is Rejected")
    },3000)
})
var p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise3 is Resolved")
        rej("Promise3 is Rejected")
    },5000)
})

Promise.any([p1,p2,p3])
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})


// Private class methods
class Test{
    #show(){
        console.log("In show() of Test Class")
    }
    display(){
        this.#show()
        console.log("In display() of Test Class")
    }
}
var x = new Test()
x.display()


//Private Getters and Setters


//Private Getters and Setters



//! ECMA 2022 --->
/*
Array at()
String at()
Object.hasOwn()
error.cause

RegExp /d
await import
Class field declarations
Private methods and fields
*/

/*
Array at()
String at()
 */

var a = [10,20,30,40,50,60,70,80,90,100]
console.log(a[5])
console.log(a.at(5))

var a = "Ducat Education Noida"
console.log(a[3])
console.log(a.at(3))

//! Error cause

Object.hasOwn()
var emp = {
    id:1001,
    name:"Nitin Chauhan"
}
console.log(Object.hasOwn(emp,"id"))
console.log(Object.hasOwn(emp,"name"))
console.log(Object.hasOwn(emp,"salary"))


try {
    // eval("alert('Hello)")
    var sum = a+b
    console.log(sum)
}
catch (err) {
    console.log(err.name)
}

//class Filed Declaration
class Test{
    a = 10
    b = 20
    display(){
        console.log(`${this.a} + ${this.b} = ${this.a+this.b}`)
    }
}
var obj = new Test()
obj.display()


//Privare class Filed Declaration
class Test{
    #a = 10
    #b = 20
    display(){
        console.log(`${this.#a} + ${this.#b} = ${this.#a+this.#b}`)
    }
}
var obj = new Test()
obj.display()




//! ECMA 2023 ---> ( return new array)
/*
Array findLast()
Array findLastIndex()
Array toReversed()
Array toSorted()
Array toSpliced()
Array with()
 */

var a = [12,213,14,15,65,15,54,65,8,59,545,54,5,15,5,5,6,4,2,31]
console.log(a.find((x)=>x%5==0))
console.log(a.findLast((x)=>x%5==0))

console.log(a.findIndex((x)=>x%5==0))
console.log(a.findLastIndex((x)=>x%5==0))

a.reverse()
console.log(a)

let b = a.toReversed()          // return new array
console.log(a)
console.log(b)

let c = a.toSorted((x,y)=>x-y)
console.log(a)
console.log(c)

var d = a.toSpliced(3,10)
console.log(a)
console.log(d)

let e = a.with(2,200)
console.log(a)
console.log(e)
