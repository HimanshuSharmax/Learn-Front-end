//! Hoisting in JS -->

/*
during execution of a program we have two phase
1. creation  phase
2. execution phase

create phase: this phase contains defination of all variables
              and functions prototype  of a program
            
execution phase: this phase contains program statements

so hoisting in js is a machanism where variables and function
declarations(creation phase) are moved to the top of execution phase
*/


// code we write -->
console.log(a)  //execution phase
var a = 10      //creation phase
console.log(a)  //execution phase


//code send for execution -->
var a               //creation phase
console.log(a)      //execution phase
a = 10              //execution phase
console.log(a)      //execution phase
