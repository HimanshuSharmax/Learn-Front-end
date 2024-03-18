/* Array: 
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value
    -> it is mutable data type

    Note: Array index always start with ZERO
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */


//1st type to create an array using array literal style
var a = [10,20,30,40,50,60,70,80,90,100]
console.log(a)

var a = [10,20,30,40,50,60,70,80,90,100,"Nitin Chauhan",true,false]
console.log(a)

//2nd type to create an array using empty array
var a = []
a.push(10)
a.push(20)
a.push(30,40,50,60,70,80,90,100)
console.log(a)


//3rd type : Array constructor
var a = Array(10,20,30,40,50,60,70,80,90,100)
console.log(a)

var a = Array(10)
console.log(a)

var a = Array(10,20)
console.log(a)

//4th type : Array constructor
var a = Array()
a.push(10)
a.push(20)
a.push(30,40,50,60,70,80,90,100)
console.log(a)


// Array using for Loop
var a = [10,20,30,40,50,60,70,80,90,100]

for(let i = 0 ;i<a.length;i++){
  console.log(a[i])
}


//Array using while Loop
let i = 0
while(i<a.length){
  console.log(a[i])
  i++
}


//Array using do while Loop
let j = 0
do{
  console.log(a[j])
  j++
}while(j<a.length)


//Array using for in Loop
for(const i in a){
  console.log(a[i])
}

//Array using for of Loop
for(const i of a){
  console.log(i)
}
