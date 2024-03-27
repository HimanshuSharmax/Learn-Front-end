/*  objects store information in pair of keys and values
    keys must be unique
    values may be duplicate
    mutable data type
*/

//! object literal 
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 135000,
    city: "Faridabad",
    state: "Haryana"
}
console.log(emp)

//! Empty object literal
var emp = {}
emp.id = 1001
emp['name'] = "Nitin Chauhan"
emp["dsg"] = "Trainer"
emp[`salary`] = 135000
emp.city = "Noida"
emp.state = "UP"
console.log(emp)


//! new Object()
var emp = Object()
emp.id = 1001
emp['name'] = "Nitin Chauhan"
emp["dsg"] = "Trainer"
emp[`salary`] = 135000
emp.city = "Noida"
emp.state = "UP"
console.log(emp)

//! Accessing Object Values with help of keys
console.log(emp.id)
console.log(emp['name'])
console.log(emp["dsg"])
console.log(emp[`salary`])


//! Accessing Object values through Loop
for(let key in emp){
    console.log(`${key} = ${emp[key]}`)
}

//! adding an item to existing object
emp.email = "vishankchauhan@gmail.com"
emp['phone'] = "9873848046"
console.log(emp)
