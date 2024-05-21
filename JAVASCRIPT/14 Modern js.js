//! Event Propagation mode determines in which order the element receive the event

/*
1. Event Capturing: first parent to last child
2. Event Bubbling(default) : from last child to first parent
*/


//! function currying -->
/*
it is a technique of evaluating function with mutliple argumnets into sequance of
function with single argument
               
i.e when a function,instead of taking all 
argumemnts at one time,it takes the first 
argument and return a new function which 
takes the second argument and return a new
function which takes the third one and so on
*/

function sum(num1){
    return function(num2){
        return function(num3){
            return function(num4){
                return function(num5){
                    return num1+num2+num3+num4+num5
                }
            }
        }
    }
}

// in short using fat arrow -
let sum = (num1)=>(num2)=>(num3)=>(num4)=>(num5)=>num1+num2+num3+num4+num5
console.log(sum(100)(200)(300)(400)(500))



//! higher order functions and callback functions: -->

/*
higher order function : a function is called higher order 
                        function which takes a function
                        a arguments
callback function :     a function is called callback 
                        function which is passed as argument
                        in another function
*/



/*
here find() findIndex() map() and filter() function are
higher Order function and check function is a callback function
*/


var a = [12,14,18,19,32,20,21,5,6,4,5,15,51,51,65,65,65,45,85,95,32,15]

function check(item){
    return item%5==0
}
console.log(a.find(check))         // when it find true it return, it didn't go ahead


function myFind(arr,fun){
    for(let item of arr){
        if(fun(item))
        return item   
    }
    return undefined
}
console.log(myFind(a,check))



function myFindIndex(arr,fun){
    for(let index in arr){
        if(fun(arr[index]))
        return Number(index)   
    }
    return -1
}
console.log(a.findIndex(check))              // return index when condn true
console.log(myFindIndex(a,check))



function myMap(arr,fun){
    let output = []
    for(let item of arr){
        output.push(fun(item))
    }
    return output
}
console.log(a.map(check))
console.log(myMap(a,check))



function myFilter(arr,fun){
    let output = []
    for(let item of arr){
        if(fun(item))
        output.push(item)
    }
    return output
}

console.log(a.filter(check))
console.log(myFilter(a,check))

