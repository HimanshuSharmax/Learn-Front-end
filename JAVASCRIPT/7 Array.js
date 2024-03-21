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


//! toString() -> convert an array into string and use , as separator
console.log(a)
console.log(a.toString())

//! join()-> convert an array into string and you can specify seperator by default join function use , as seperator
console.log(a.join())
console.log(a.join(" "))
console.log(a.join(" | "))


// array: push() pop() shift() unshift() splice() delete ->

//!push():   insert one or more then one element in last of an array and return updated length of array
var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(a)
console.log("Updated Length of Array After Intertion : ",a.push(110))
console.log(a)
console.log("Updated Length of Array After Intertion : ",a.push(120,130,140,150))
console.log(a)


//! pop()     delete an element from last of an array and return deleted array element
console.log("Deleted Array Element : ",a.pop())
console.log(a)


//! unshift() insert one or more then one element element in starting of an array and return updated length of array
console.log("Updated Length of Array After Intertion : ",a.unshift(5))
console.log(a)
console.log("Updated Length of Array After Intertion : ",a.unshift(1,2,3,4))
console.log(a)

//! shift()   delete an element from first position of an array and return deleted array element
console.log("Deleted Array Element : ",a.shift())
console.log(a)

//! splice()  used to insert or delete or update elements from any specific position of array and return array of deleted elements
          // syntax:
          // array.splice(pos,numberOfItemToDelete,[itemstoInsert])
console.log("Deleted Array Element : ",a.splice(3,5))
console.log(a)

console.log("Deleted Array Element : ",a.splice(4,0,41,42,43,44,45))
console.log(a)

console.log("Deleted Array Element : ",a.splice(4,5,41,42,43,44,45))
console.log(a)


//! delete  : it delete an item from array and leave empty space
delete a[5]
console.log(a)


//! slice() return a list of items from pos to pos
var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250]
console.log(a)
console.log(a.slice(5,15))
console.log(a.slice(15))
console.log(a.slice(-15))



//! concat()
var a =  [1,2,3,4,5]
var b = [10,20,30,40,50]
var c = [100,200,300,400,500]
var d = ["Nitin","Amit","Sumit","Satish","Vicky"]
var e = a.concat(b,c,d)
console.log(e)



//! keys() ->   generate an iterator which contains key
//! values() ->  generate an iterator which contains value
//! entries() -> generate an iterator which contains key and value of items
for(let item of a.keys()){
  console.log(item)
}

for(let item of a.values()){
  console.log(item)
}

for(let item of a.entries()){
  console.log(item)
}
