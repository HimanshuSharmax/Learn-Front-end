/**
 *  oops:
 *  -> designed by Bjarne Stroustroup(C++ Founder)
 *  -> object oriented programming Structure
    oops is a computer science term which defines a well
    structured series or steps to construct a computer
    application which composed of multiple objects,
    each object can handle data, get and transfer 
    messages to each other, since objects are not
    dependent on each other oops is seen as being
    more flexible then procedural approach

    OOPS Approachs:
    1. Abstraction  :   Data Hiding
    2. Encapsulation:   Binding data and function in a single unit
    3. Polymorphism :   Many forms of Single Entity
    4. Inheritance   :   Code Reusability

    class is required to implement oops

    class: class is a technique by which we can define a new
           data type as we required

           class is a blue print of objects

           class is a collection of properties and behaviours
           where properties means variables of different-different
           data types and behaviors means various functions

           class is a logical entity only, that mean class doesn't 
           have physical existance in memory, until its instance
           is created, and name of instance is called object
    syntax:
    class ClassName{
        constructor(){
            ----
        }
        method1(){
            ----
        }
        method2(){
            ----
        }
        --
    }
 */

//! class without constructor
class Test{
    show(){
        console.log("In show() of Test class")
    }
    display(){
        console.log("In display() of Test Class")
    }
}
var obj = new Test()
obj.show()
obj.display()


class Add {
    set(x, y) {
        this.a = x
        this.b = y
        this.sum = this.a + this.b
    }
    display(){
        console.log(`${this.a} + ${this.b} = ${this.sum}`)
    }
}
var obj1 = new Add()
var obj2 = new Add()
obj1.set(10,20)

obj1.display()
obj2.display()



class Magical{
    set(n){
        this.n = n
    }
    check(){
        let sum = 0
        let rev = 0
        let num = this.n
        while(num!=0){
            let r = num%10
            sum = sum+r
            num = parseInt(num/10)
        }
        num = sum
        while(num!=0){
            let r = num%10
            rev = rev*10+r
            num = parseInt(num/10)
        }
        if(sum*rev==this.n)
        console.log(`${this.n} is a Magical Number`)
        else
        console.log(`${this.n} is not a Magical Number`)
    }
}
var obj = new Magical()
obj.set(1729)
obj.check()

obj.set(1458)
obj.check()

obj.set(4558)
obj.check()



/*
OOPS Approachs:
1. Abstraction  :   Data Hiding i.e hiding complexity
                    showing functionality, we can hide
                    members using access specifiers
                    like public,private and protected,
                    (javaScript Doesn't Support
                    Abstraction)

2. Encapsulation:   Binding Data Members with
                    Member Functions/Methods
                    or
                    Wrapping-up data members with
                    member function

3. polymorphism :   Many forms of single entity

            1. Method Overloading : if we define
                    more then one function in a class
                    with same name but with different
                    signature(either number of arguments
                    must be different or their types
                    must be different)(JavaScript Doesn't
                    Support Method Overloading)

            2. Constructors and Destructor
                    we can use constructor in JavaScript
                    but we can't use destructor in JS

            3. Method Overriding: if both parent class
                    and child class having same named
                    members then child class override
                    parent's member i.e child cass can
                    inherit only those member from
                    parent which child doesn't have
                    JS Support This Concept

            4. Operator Overloading:
                    if we provide user defined
                    defination to an existing
                    operator then this concept is
                    called operator overloading
                    JS Doesn't Support this feature

4. Inheritance: if we reuse member of any existing
                class in a new class is called
                inheritance
                JS Support this Concept


class with constructor
Constructor:
    -> a special member method of class which provide memory
       initialization to a class object
    -> there is no need to call constructor it called automatically
       when object is declared with help of new
    -> it can be parameterised
    -> if we not provide defination to a constructor in class
        then compiler(JIT) provide defination to constructor
    -> we can't return any specific value from a constructor
 
 */

class Test{
    constructor(){
        console.log("Constructing class Test")
    }
    show(){
        console.log("In show() of Test Class")
    }
}
var obj = new Test()
obj.show()
obj.show()
obj.show()
obj.show()



class AreaCalculation{
    constructor(first=null,second=null,third=null){
        if(third){
            this.l = first
            this.b = second
            this.h = third
            this.area = 2*(this.l*this.b + this.b*this.h + this.h*this.l)
        }
        else if(second){
            this.l = first
            this.b = second
            this.area = this.l*this.b
        }
        else if(first){
            this.r = first
            this.area = 3.14*this.r**2
        }
    }
    display(){
        console.log(`Area = ${this.area}`)
    }
}
var circle = new AreaCalculation(10)
var rectangle = new AreaCalculation(10,20)
var cuboid = new AreaCalculation(10,20,30)

circle.display()
rectangle.display()
cuboid.display()
