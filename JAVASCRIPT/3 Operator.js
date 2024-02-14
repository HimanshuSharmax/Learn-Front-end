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

/*
4.  Relational Operator:
    used to compare two operands
    <       Less Than
    <=      Less Than Equal
    >       Greater Than 
    >=      Greater Than Equal
    !=      not Equal       (check only value)
    !==     not Identical   (check value and data type both)
    ==      Equal           (check value only)
    ===     Identical       (check valye and data type both)
*/
                    
console.log(10<20)   //true
console.log(10<=20)  //true
console.log(100<20)  //false
console.log(100<=20) //false
console.log(20<20)   //false
console.log(20<=20)  //true

console.log(10>20)   //false
console.log(10>=20)  //false
console.log(100>20)  //true
console.log(100>=20) //true
console.log(20>20)   //false
console.log(20>=20)  //true

console.log(10==10)     //true
console.log(10=="10")   //true
console.log(10==10.0)   //true
console.log(10==20)     //false

console.log(10===10)     //true
console.log(10==="10")   //false
console.log(10===10.0)   //true
console.log(10===20)     //false

console.log(10!=20)         //true
console.log(10!=10)         //false
console.log(10!="10")       //false

console.log(10!==20)         //true
console.log(10!==10)         //false
console.log(10!=="10")       //true

/*
5.  Logical Operators:
    used to make a compound condition

    Operator    symbol  operation               type    precedence
    Logical And &&      return true if all      binary  L to R
                        conditions are true
                        else return false
    Logical Or  ||      return true if atleast  binary  L to R
                        one condition is true
                        else return false
    Logical Not !       return true if condition Unary  R to L
                        is false and return 
                        false if condition is 
                        true
 */

console.log(10 && 20)           //true i.e 20
console.log(10 && 0)            //false i.e 0
console.log(0 && 20)            //false i.e 0
console.log(0 && 0)             //false i.e 0
console.log(10 && false)        //false i.e false
console.log(false && "Nitin")   //false i.e false

console.log(10 || 20)               //true i.e 10
console.log(10 || 0)                //true i.e 10
console.log(0 || 20)                //true i.e 20
console.log(0 || 0)                //false i.e 0
console.log(0 || false)            //false i.e false

console.log(!10)                    //false
console.log(!0)                     //true

//! 0 null undefined empty string false -> all are false
//! and any other value if true




/*
6. Bitwise Operator:

Operators               Symbols     Type    Precedence
1. Bitwise And          &           Binary  L to R
2. Bitwise Or           |           Binary  L to R
3. Bitwise Xor          ^           Binary  L to R
4. Bitwise Left Shift   <<          Binary  L to R
5. Bitwise Right Shift  >>          Binary  L to R
6. Bitwise Negation     ~,-         Unary   R to L

a   b   a&b a|b a^b(a|b - a&b)
0   0   0    0   0
0   1   0    1   1
1   0   0    1   1
1   1   1    1   0
 */

var a = 39
var b = 63
var c = a&b 
var d = a|b
var e = a^b
console.log(c,d,e)

/*
a   =   49  :   0   1   1   0   0   0   1   
b   =   77  :   1   0   0   1   1   0   1   
-------------------------------------------
c=a*b       :   0   0   0   0   0   0   1
                64  32  16  8   4   2   1
                ---------------------------
                0   0   0   0   0   0   1   =>1
-----------------------------------------------
d=a|b       :   1   1   1   1   1   0   1
                64  32  16  8   4   2   1
                ---------------------------
                64  32  16  8   4   0   1   =>125
-------------------------------------------------
e=a^b       :   1   1   1   1   1   0   0
                64  32  16  8   4   2   1
                ---------------------------
                64  32  61  8   4   0   0   =>124
 */
