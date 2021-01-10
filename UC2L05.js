    // Adding Elements //

var title = document.getElementById("Header1");

    console.log(title);

title.setAttribute("style", "position: relative;");

title.style.backgroundColor = "black"

// title.style.left = "10px"
// title.style.right = "10px"
title.style.color = "white"

var UC2 = document.getElementById("Header2");

    console.log(UC2);

UC2.setAttribute("style", "font: position:");

UC2.style.font = "italic bold 25px gothic";
UC2.style.color =  "green";

    // Adding Elements to the DOM

var newUC2 = document.createElement("h2");
var Assignment = document.getElementById("Header2");

Assignment.appendChild(newUC2);
newUC2.innerHTML = "This is my UC2.L05 Assignment";

var newHeader3 = document.createElement("h3");
var nowHeader3 = document.getElementById("Header3");

nowHeader3.appendChild(newHeader3);
newHeader3.innerHTML = "Includes Topic";

// UC2.insertBefore(newUC2, UC2.getElementsByTagName("h2")[0]);

    // Removing Elements from the DOM //

var parent = document.getElementById("Header3");
console.log(parent);

var child = parent.getElementsByTagName("h3")[0];
console.log(child);

var remove = parent.removeChild(child);

    // Introduction to JavaScript Events //

    

var hover = document.getElementById("hover");

    console.log(hover);

hover.onmouseover = function() {
    alert("I told you Don't point your cursor!");

};
    // Onclick Event

var a = document.getElementById("button");

    console.log(a);

a.onclick = function() {
    alert("OOPS!!! CLICK OK");
};

var message = document.getElementById("message");

message.onclick = function() {

  if (message.onclick) {
    message.style.font = "italic bold 25px gothic"
    message.innerHTML = "JUST KIDDING"
   }

}

     // JavaScript Timers //

     var textChanger = document.getElementById("changer");
     var text = ["See?", "Cool, right?", "Hehehe", "Watch me again"];
     var counter = 0;
     
     function magic(){
         if (counter >= text.length){
             counter = 0;
         }
         textChanger.innerHTML = text[counter];
         counter++;
     };