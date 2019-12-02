//Window visualization

"use strict";
// Reference the color shape that was drawn over the image
const path = "images/";
const bg = document.getElementById("bg");
const svg = document.getElementById("svg");
const svgWindow = document.getElementsByClassName("svg-window");

// Background color
function changeBgColor(e) {
    document.getElementById("bg-picker").style.backgroundColor = "#ffffff";
    document.getElementById("bg-picker").value = "FFFFFF";
    bg.style.backgroundColor = "transparent";
}
function changeBgCustomColor(picker) {
    bg.style.backgroundColor = picker.toHEXString();
}

//Window type
var windowType = document.getElementsByClassName("window-type");
for (var wt = 0; wt < windowType.length; wt++) {
    windowType[wt].onclick = changeWindow;
}
function changeWindow(e) {
    let window = this.getAttribute("data-type");
    let title = e.target.getAttribute("data-title");
    document.getElementById("type").innerHTML = title;
    for (var wc = 0; wc < svgWindow.length; wc++) {
        svgWindow[wc].style.display = "none";
    }
    let activeType = document.getElementsByClassName("svg-" + window);
    for (var at = 0; at < activeType.length; at++) {
        activeType[at].style.display = "block";
    }
    document.getElementById("window-type").src = path + "window/big/" + window + ".png";
}

//
var windowColor = document.getElementsByClassName("window-color");
for (var i = 0; i < windowColor.length; i++) {
    windowColor[i].onclick = changeWindowColor;
}

function changeWindowColor(e) {
    let hex = e.target.getAttribute("data-hex");
    let url = e.target.getAttribute("data-url");
    let title = e.target.getAttribute("data-title");
    document.getElementById("color").innerHTML = title;

    for (var wc = 0; wc < svgWindow.length; wc++) {
        svgWindow[wc].style.fill = "url(#color-" + url +")";
    }
}




