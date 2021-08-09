window.onload=type; // TEXT EFFECT 
var i = 0;
var txt = "Welcome to my Blog!";

var speed = 50;

function type() {
    if (i < txt.length) {
        document.getElementById("suf").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

