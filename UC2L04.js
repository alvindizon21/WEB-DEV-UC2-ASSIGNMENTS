    // Introduction to Objects //

var myString = new String();
myString = "hello";

    console.log(myString);
    console.log(myString.toUpperCase());
    console.log(myString.length);
   
    // Short hand

var myString2 = "hi there";

    console.log(myString2);
    console.log(myString2.toUpperCase());
    console.log(myString2.length);

    // Creating New JavaScript Object //

var myCar = new Object();

myCar.maxSpeed = "Max Speed is " + 50;
myCar.driver = 'Driver Name is ' + "Alvin";
myCar.drive = function() {

    console.log("Now Driving Fasten your seatbelt");
};

    console.log(myCar.driver);
    console.log(myCar.maxSpeed);
    myCar.drive();

    // Short hand

var myCar2 = {

    maxSpeed: 70, driver: "Harold", drive: function(){
        
        console.log("Now Driving Fasten your seatbelt");
        
    }
};

    console.log(myCar2.driver + " is your Driver");
    console.log(myCar2.maxSpeed + " Max speed Set");
    myCar2.drive();

    // Other Variable (Function)

var myCar2 = {

    maxSpeed: 70, 
    driver: "Harold", 
    drive: function(speed, time) {
            
        console.log("Car speed/hr " + speed * time);
            
    }
};
    myCar2.drive(70, 3);


    // myCar3 test

var myCar3 = {

    maxSpeed: 80, 
    driver: "Aaron", 
    drive: function(speed, time) {    

        console.log(speed * time);            
    },
    test: function(){

        console.log(this);
    }
};

myCar3.test();

    // ==== this keyword ====

var myCar4 = {

    maxSpeed: 60, 
    driver: "James", 
    drive: function(speed, time) {    

        console.log(speed * time + " Speed/Hr");            
    },
    logDriver: function(){

        console.log("Driver name is " + this.driver);
    }
};


myCar4.logDriver();
console.log(myCar4.maxSpeed + " maxSpeed");
myCar4.drive(60, 3);

    // Constructor Functions

var Car = function(maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {    

        console.log(speed * time + " Speed/Hr");            
    },
    this.logDriver = function(){

        console.log("Driver name is " + this.driver);
    }

}

var myCar = new Car(50, "Lee");
var myCar2 = new Car(70, "Park");
var myCar3 = new Car(80, "Seo");
var myCar4 = new Car(60, "Shin");

myCar3.logDriver();
myCar.drive(65, 5);
console.log(myCar4.maxSpeed + " max speed");

    // Date Objects //

var myPastDate = new Date(1993, 5, 21, 06, 21, 33);
var myFutureDate = new Date(2021, 5, 21, 03, 00, 15);

console.log(myPastDate);
console.log(myFutureDate);

var birthday = new Date(1991, 5, 21. );
var birthday2 = new Date(1991, 5, 21. );

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

    // Date Object in if statement

    // false statement

if(birthday == birthday2) {

    console.log("Birthdays are equal");

} else {

    console.log("Birthdays are not equal");

}
    // True Statement

if(birthday.getTime == birthday2.getTime) {

    console.log("Birthdays are equal");

} else {

    console.log("Birthdays are not equal");

}

    // Changing Element Via DOM (Document Object Model) //


var myCourse = document.getElementById("Header1");

    console.log(myCourse);

var myAssignment = document.getElementById("Header2")

    console.log(myAssignment);

var Topic = document.getElementById("Header3");

    console.log(Topic);

var myContent = document.getElementsByClassName("Content");

    console.log(myContent);

    // changing Page Content

console.log(myCourse.textContent);
myCourse.textContent = console.log("Welcome to my World");

    // Changing Elements Attributes

var text = document.getElementById("Header2");
text.getAttribute("class");
text.setAttribute("class", "Content");
console.log(text);




