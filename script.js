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
function mouseOver() {
  document.getElementById("body").style.backgroundColor = "yellow";
}
function mouseOut() {
  document.getElementById("body").style.backgroundColor = "white";
}

let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
btn1.addEventListener("click", backgroundColor);
btn2.addEventListener("dblclick", backgroundColorP);
btn3.addEventListener("mousedown", mouseDown);
btn3.addEventListener("mouseout", mouseOut);
linck.addEventListener("mouseover", mouseOver);
linck.addEventListener("mouseout", mouseOut);

// Task 4
/*function myFunction(event) {
  let y = event.target;
  y.remove();
}
document.addEventListener("dblclick", myFunction);*/

// Task 5

function liveButton() {
  //let p = document.createElement("p");
  // p.innerHTML = "Mouse on me!"; // 1
  //live.after(p);
  live.insertAdjacentHTML("afterend", "<p>Mouse on me!<p>"); //2
}
live.addEventListener("mouseover", liveButton);
function presBotton() {
  live.insertAdjacentHTML("afterend", "<p>I wos presed!<p>");
}
live.addEventListener("click", presBotton);
function outBotton() {
  live.insertAdjacentHTML("afterend", "<p>Mous is not on me!<p>");
}
live.addEventListener("mouseout", outBotton);

function del(event) {
  let x = event.target;
  if (x.tagName == "P") {
    x.remove();
  }
}
document.addEventListener("click", del);

// Task 6

document.write(
  "Width: " + window.innerWidth,
  ", ",
  " Height: " + window.innerHeight
);
