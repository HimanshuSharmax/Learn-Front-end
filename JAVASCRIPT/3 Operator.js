/*
Operators:  some special symbols which are used
            to perform some predefine operations
            on operands(variables,constants etc i.e
            a value)
Category on Basis of Operands:
1. Unary    :   Required only one operand
2. Binary   :   Required two operands
3. Ternary  :   Required three Operands

Types:
1. Arithmetic Operators
2. Assignment Operator
3. Composite/Compound/Short Hand Operators
4. Relational Operator
5. Logical Operators
6. Bitwise Operators
7. Conditional Operator
8. Increment Operator
9. Decrement Operator
10. MISC. Operator
 */

/*
1. Arithmetic Operators:
    +   Addition
    -   Subtraction
    *   Multiplication
    /   Division(Quotient)
    %   Division(Remainder)
    **  Power


    Category: Binary
    Precedence: L to R
    Priority: 
                1. Brackets
                2. **
                3. * / %
                4. + -
 */

console.log(15+6)               //21
console.log(15+"6")             //156
console.log("15"+6)             //156
console.log("15"+"6")           //156
console.log("15"+"Hello World") //15Hello World


console.log(15-6)               //9
console.log(15-"6")             //9
console.log("15"-6)             //9
console.log("15"-"6")           //9
console.log("15"-"Hello World") //NaN

console.log(15*6)               //90
console.log(15*"6")             //90
console.log("15"*6)             //90
console.log("15"*"6")           //90
console.log("15"*"Hello World") //NaN

console.log(15/6)               //2.5
console.log(15/"6")             //2.5
console.log("15"/6)             //2.5
console.log("15"/"6")           //2.5
console.log("15"/"Hello World") //NaN

console.log(15%6)               //3
console.log(15%"6")             //3
console.log("15"%6)             //3
console.log("15"%"6")           //3
console.log("15"%"Hello World") //NaN

console.log(15**6)               //11390625
console.log(15**"6")             //11390625
console.log("15"**6)             //11390625
console.log("15"**"6")           //11390625
console.log("15"**"Hello World") //NaN

var  a = 10*3/5*7%50/7*10%70/10*5-14*3%20*15/10*5+5*(5*2**5)
console.log(a)

/*
10*3/5*7%50/7*10%70/10*5-14*3%20*15/10*5+5*(5*2**5)
10*3/5*7%50/7*10%70/10*5-14*3%20*15/10*5+5*(5*32)
10*3/5*7%50/7*10%70/10*5-14*3%20*15/10*5+5*160
30/5*7%50/7*10%70/10*5-14*3%20*15/10*5+5*160
6*7%50/7*10%70/10*5-14*3%20*15/10*5+5*160
42%50/7*10%70/10*5-14*3%20*15/10*5+5*160
42/7*10%70/10*5-14*3%20*15/10*5+5*160
6*10%70/10*5-14*3%20*15/10*5+5*160
60%70/10*5-14*3%20*15/10*5+5*160
60/10*5-14*3%20*15/10*5+5*160
6*5-14*3%20*15/10*5+5*160
30-14*3%20*15/10*5+5*160
30-42%20*15/10*5+5*160
30-2*15/10*5+5*160
30-30/10*5+5*160
30-3*5+5*160
30-15+5*160
30-15+800
15+800
815
 */

var  a = 15*5%100/10*2*4%40/5*7%20*7-45/9*5/10*8+25%(25*2**6)
console.log(a)

/*
15*5%100/10*2*4%40/5*7%20*7-45/9*5/10*8+25%(25*2**6)
15*5%100/10*2*4%40/5*7%20*7-45/9*5/10*8+25%(1600)
15*5%100/10*2*4%40/5*7%20*7-45/9*5/10*8+25
75%100/10*2*4%40/5*7%20*7-45/9*5/10*8+25
75/10*2*4%40/5*7%20*7-45/9*5/10*8+25
7.5*2*4%40/5*7%20*7-45/9*5/10*8+25
15*4%40/5*7%20*7-45/9*5/10*8+25
60%40/5*7%20*7-45/9*5/10*8+25
20/5*7%20*7-45/9*5/10*8+25
4*7%20*7-45/9*5/10*8+25
28%20*7-45/9*5/10*8+25
8*7-45/9*5/10*8+25
56-45/9*5/10*8+25
56-5*5/10*8+25
56-25/10*8+25
56-2.5*8+25
56-20+25
56-20+25
36+25
61
 */

/*
2. Assignment Operator(=):
used to assign value of RHS operand to LHS operand
eg. sum=a+b;    //valid
eg. a+b=sum;    //invalid
eg. a=b=c;      //valid

Category: Binary
Precedence: R to L
 */



/* 
3. Composite/Compound/Short Hand Operators
                combination of Assignmnet Operator with other 
                operators
    a=a+b         =>      a+=b
    a=a-b         =>      a-=b
    a=a*b         =>      a*=b
    a=a/b         =>      a/=b
    a=a%b         =>      a%=b
    a=a**b        =>      a**=b
*/
