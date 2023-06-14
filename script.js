var header = document.getElementById("header");
var iphone = document.getElementById("iphone");
var huawei = document.getElementById("huawei");
var xpera = document.getElementById("xperia");
var samsung = document.getElementById("samsung");
var model = document.getElementById("model");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");

iphone.onclick = function () {
    header.style.backgroundImage = "url(imgs/iphone1.jpg)";
    model.innerHTML = "Iphone";
}

huawei.onclick = function () {
    header.style.backgroundImage = "url(imgs/huawei.jpg)";
    model.innerHTML = "Huawei";
}

xperia.onclick = function () {
    header.style.backgroundImage = "url(imgs/Xperia.jpg)";
    model.innerHTML = "Xperia";
}

samsung.onclick = function () {
    header.style.backgroundImage = "url(imgs/samsung.jpg)";
    model.innerHTML = "Samsung";
    link1.style.fontStyle = black;
    link2.style.fontStyle = black;
    link3.style.fontStyle = black;
    link4.style.fontStyle = black;
}