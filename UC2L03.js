<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UC2.L03 </title>
</head>

<body>
    <h1>Web Development Lvl III</h1>
    <h2>UC2.L03 Assignment</h2>
    <h3>Topic - The world of functions in JS, Variable Scope, working with numbers, introduced you to NaN (Not a Number), third data type - strings, The slice method and the split method, and how to make arrays.</h3>

    <a href="#">Link 0</a>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
    <a href="#">Link 5</a>
    
    
    <script src="UC2L03.js"></script>
</body>
</html>
}

logResult();

    // Working With Numbers //

var a = 10;
var b = 20;

    console.log(a + b);
    
    console.log(Math.round(7.8));
    console.log(Math.floor(7.8));
    console.log(Math.ceil(7.8));
    console.log(Math.max(7,4,9,8));
    console.log(Math.PI);

    // NaN (Not a Number) //

var a = "5";
var b = 5;

if (isNaN(a)) {

    console.log("value of a is not a number.");

} else {

    console.log("The value is a number " + (a * b));

}

    // Strings //

var myString = 'I\'m a "fun" string';

    console.log(myString);

var myString = 'I\'m a "fun" string';

    console.log(myString.length);

var myString = 'I\'m a "fun" string';

    console.log(myString.toUpperCase());

var myString = 'I\'m a "fun" string';

    console.log(myString.toLowerCase());

var myString = 'I\'m a "fun" string';

    console.log(myString.indexOf("string"));

var myString = 'I\'m a "fun" string';

    console.log(myString.indexOf("ninja"));

var myString = 'I\'m a "fun" string';

if (myString.indexOf("ninja") === -1) {

    console.log("the word ninja is not in the string");

} else {

    console.log("the word ninja starts at position " + myString.indexOf("ninja"));

}

    // Slice and Split Strings //

        // Slicing

var str = "hello, world";
var str2 = str.slice(2,9);
var str3 = str.slice(2);

    console.log(str2);
    console.log(str3);

        // Spliting
var tags = "meat, ham, salami, pork, beef, chicken"
var tagsArray = tags.split(",");

    console.log(tagsArray);

     // Arrays

var myArray = [24, 65, true, "hello"];

    console.log(myArray);

var myArray2 = [50, 20, "hi", false];

    console.log(myArray2);
    console.log(myArray2.sort());

var myArray3 = [5, 10, "bye", true];

    console.log(myArray3);

var myArray4 = [18, 29, 60, 40];

    console.log(myArray4.length + " is your myArray4 length.");
