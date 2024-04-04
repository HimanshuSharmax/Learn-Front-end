/* Set:collection of Unique Elements
    can't contain duplicate items
    set does not support indexing
    mutable data type
 */

//how to make a set using new Set()

//! Usecase -> remove duplicate items from array

var a = [10,20,30,10,20,30,10,20,30,20,30,40,50,60,70,80,90,10,10,10,100,20,30,20,30,50,60,70,80,90,10,40,40,50,60,60,60,60,60,80]
var b = new Set(a)
var c = Array.from(b)
console.log(a)
console.log(b)
console.log(c)

//! add() -> used to add an item in set,do nothing if item already exist
b.add(100)
console.log(b)
b.add(110)
console.log(b)

//! delete() used to delete any particular item from Set
//do nothing if delete is empty
b.delete()
console.log(b)
b.delete(50)
console.log(b)

//! clear()   //remove all items from set
b.clear()
console.log(b)

//! size: return size of set
console.log(b.size)

//! has() ->return true if item exist in set else return false
console.log(b.has(50))
console.log(b.has(500))


/*
    values:     return an iterator containing all items of set
    keys:       return an iterator containing all items of set
    entries:    return an iterator in pair if value,value 
                containing all items of set
 */
console.log(b.values())
console.log(b.keys())
console.log(b.entries())

//! map: -> collection of item but in pair of key and value
//      keys must be unique but values may be duplicate
//  if we use duplicate key in a map then only last key will used


//how to make a map
var emp = new Map([
    ["Nitin",135000],
    ["Amit",455000],
    ["Satyam",655000],
    ["Deepak",125000],
    ["Mamta",135000],
    ["Vishal",235000],
    ["Rahul",435000],
    ["Madhur",535000],
])
console.log(emp)


//! set() -> of map insert an item in map and if key already exist then
// set() -> update keys value
emp.set("Nitin",150000)
emp.set("Neeraj",150000)
console.log(emp)


//! delete() -> used to delete any particular key from Map do nothing in case of Empty
emp.delete("Nitin")
console.log(emp)


//! clear()  ->  //used to delete all items from Map
emp.clear()
console.log(emp)


//! size -> return number of items of Map
console.log(emp.size)


//! has() :-> return true is map has an item else return false
console.log(emp.has("Nitin"))
console.log(emp.has("Nikita"))


//! get() : return value of specific key
console.log(emp.get("Nitin"))
