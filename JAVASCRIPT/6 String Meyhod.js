/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
            eg. name,email,password etc

            string is a immutable data type
            index start with 0
 */

//String Constant
var a = 'Ducat Education Noida'
var b = "Ducat Education Noida"
var c = `
            Ducat
            Education
            Noida
        `
console.log(a,typeof(a))
console.log(b,typeof(b))
console.log(c,typeof(c))


//String using for Loops
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

//string using while loop
let i = 0
while (i < a.length) {
    console.log(a[i])
    i++
}

//string using do while loop
let j = 0
do{
    console.log(a[j])
    j++
}while (j < a.length) 

//for in loop  : index
for(const i in a){
    console.log(a[i])
}

//for of loop : value
for(const i of a){
    console.log(i)
}
