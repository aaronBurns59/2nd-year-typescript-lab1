
function
addition(value: string) {
console.log("Value is: " + value);
}
let firstVal: number = 42;
let secondVal: number = 1;
let sumOfVals: string = (firstVal + secondVal).toLocaleString();


//Boolean
let flag: boolean = true;
console.log("Value Assigned to flag is: " + flag);

//Int
let num1: number = 6;
console.log("Value of num1 is: " + num1);

//String
let colour: String = "Blue";
console.log("Value Assigned to colour is: " + colour);

//Array
let list: number[]= [4,5,6];
for (let i=0; i<list.length; i++)
console.log("Number " + (i+1) + " is " + list[i]);

//Tuple
let x: [string, number];
x= ["Hello", 10];
console.log(x[0] + " " + x[1]);

//Enum
enum Colour {Red=1, Green, Blue}
let colourUsed: string = Colour[2];
let c: Colour = Colour.Green;
console.log("Value colourUsed: " + colourUsed);
console.log("Value of c: " + c);
console.log("Name of c is: " + Colour[c]);

//Any
let notSure: any= 4;
notSure= "maybe a string now: " + notSure;
console.log("Value is a string: " + notSure);
notSure=false;
console.log("Now value is a boolean: " + notSure);

//any array
let listany: any[] = [1, true, "Free"];
for(let i= 0; i<listany.length;i++)
console.log("Before: Entry " + (i+1) + " is: " + listany[i]);

listany[1] = 100;
listany[2] = "lol";
for(let i =0; i<listany.length;i++)
console.log("After: Entry " + (i+1) + " is: " + listany[i]);