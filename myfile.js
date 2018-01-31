function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
//Boolean
var flag = true;
console.log("Value Assigned to flag is: " + flag);
//Int
var num1 = 6;
console.log("Value of num1 is: " + num1);
//String
var colour = "Blue";
console.log("Value Assigned to colour is: " + colour);
//Array
var list = [4, 5, 6];
for (var i = 0; i < list.length; i++)
    console.log("Number " + (i + 1) + " is " + list[i]);
//Tuple
var x;
x = ["Hello", 10];
console.log(x[0] + " " + x[1]);
//Enum
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 1] = "Red";
    Colour[Colour["Green"] = 2] = "Green";
    Colour[Colour["Blue"] = 3] = "Blue";
})(Colour || (Colour = {}));
var colourUsed = Colour[2];
var c = Colour.Green;
console.log("Value colourUsed: " + colourUsed);
console.log("Value of c: " + c);
console.log("Name of c is: " + Colour[c]);
//Any
var notSure = 4;
notSure = "maybe a string now: " + notSure;
console.log("Value is a string: " + notSure);
notSure = false;
console.log("Now value is a boolean: " + notSure);
//any array
var listany = [1, true, "Free"];
for (var i = 0; i < listany.length; i++)
    console.log("Before: Entry " + (i + 1) + " is: " + listany[i]);
listany[1] = 100;
listany[2] = "lol";
for (var i = 0; i < listany.length; i++)
    console.log("After: Entry " + (i + 1) + " is: " + listany[i]);
