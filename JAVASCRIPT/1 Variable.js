/*
      JavaScript Basics:
          1. Keywords
          2. Identifier
          3. Data Types
          4. Variables
          5. Constant/Literals
          6. Tokens
          7. Input/Output
          8. Operator


          Identifiers:
              name of programming entities like variables,functions,
              objects,classes etc

          Rules of Identifiers:
              1. we can't use any keywords
              2. we can't use any digit as prefix of identifier
                 but we can use digit in postix
              3. We can't use any special character except underscore
              4. We can't use same name for more the one item of same
                 Statement block

          Data Types:
          Number : any whole or fractional number like
                   10 25.36 -25.35 -50 +25.36 +25
          String : Collection of Characters
                   like 'sample' "example"    `
                                                  Ducat
                                                  Education
                                                  Noida
                                              `
          boolean : true false
          --------------------------------------------
          null
          undefined
          object
          bigint
          array

          Data Representation:
          1. Variable:
              used when data is not fixed
              variables are names of memory locations in RAM which
              contains some informations
              or
              variables are placeholder for data in RAM
              or
              variables are data containers
              syntax:
                  var variableName=value;     //function level
                  let variableName=value;     //block level
                  const variableName=value;   //block level and read
                                              // only
          2. Constant\Literals:
              used when data is fixed
              boolean: true false
              number : 10 +20 -25 15.36 +25.25 -65.25
              string : 'sample' "sample"
       */

var a = 10;
var b = 15.36;
var c = -15;
var d = true;
var e = false;
var f = "Hello";
var g = "World";
var h = `
            Hello World1
            Hello World2
            Hello World3
              `;
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);
console.log(h, typeof h);

console.log(`
      a = ${a} typeof a = ${typeof a}
      b = ${b} typeof b = ${typeof b}
      c = ${c} typeof c = ${typeof c}
      d = ${d} typeof d = ${typeof d}
      e = ${e} typeof e = ${typeof e}
      f = ${f} typeof f = ${typeof f}
      g = ${g} typeof g = ${typeof g}
      h = ${h} typeof h = ${typeof h}
  `);

var a = 10;
var b = 20;
var sum = a + b;
console.log(a, "+", b, "=", sum);
console.log(a + " + " + b + " = " + sum);
console.log(`${a} + ${b} = ${sum}`); //string template literal style


/*
          Tokens:
          smallest Entity of any program like identifiers,
          constants,keywords, operators, punctuators(, space
              : ; [] () {} etc)

          var a=10;
          var     =>  keyword
          a       =>  identifier(variable)
          =       =>  operator
          10      =>  constant
          ;       =>  punctuator
       */
