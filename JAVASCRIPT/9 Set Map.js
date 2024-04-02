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
