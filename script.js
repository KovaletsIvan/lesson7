// Task 1

let newTab = window.open("", "window", "width = 300, height = 300 ");

setTimeout(function() {
  newTab.resizeTo(500, 500);
}, 2000);
setTimeout(function() {
  newTab.moveTo(200, 200);
}, 3000);
setTimeout(function() {
  newTab.close();
}, 4000);

//Task 2

function changeCss() {
  let paragraf = document.getElementById("text");
  paragraf.style.color = "orange";
  paragraf.style.fontSize = "20px";
  paragraf.style.fontFamily = "Comic Sans MS";
}
let btn = document.getElementById("btn");
btn.addEventListener("click", changeCss);

// Task 3
let body = document.getElementById("body");
function backgroundColor() {
  body.style.backgroundColor = "blue";
}
function backgroundColorP() {
  body.style.backgroundColor = "pink";
}
function mouseDown() {
  document.getElementById("body").style.backgroundColor = "brown";
}
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
btn1.addEventListener("click", backgroundColor);
btn2.addEventListener("dblclick", backgroundColorP);
btn3.addEventListener("mousedown", mouseDown);

// Task 4

let i = document.querySelector(".peter");
function display() {
  document.querySelector(".in").style.display = "block";
}
i.addEventListener("click", display);
