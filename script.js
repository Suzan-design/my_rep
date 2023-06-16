var header = document.getElementById("header");
var iphone = document.getElementById("iphone");
var huawei = document.getElementById("huawei");
var xpera = document.getElementById("xperia");
var samsung = document.getElementById("samsung");
var model = document.getElementById("model");
var Iph = document.getElementById("Iph");
var Hua = document.getElementById("Hua");
var Xp = document.getElementById("Xp");
var Sam = document.getElementById("Sam");
var iphoneInfo = document.getElementById("IphoneInfo");
var huaweiInfo = document.getElementById("HuaweiInfo");
var xperiaInfo = document.getElementById("XperiaInfo");
var samsungInfo = document.getElementById("SamsungInfo");
var line = document.getElementById("line");
var h2 = document.getElementById("h2");
var h22 = document.getElementById("h22");

iphone.onclick = function () {
    header.style.backgroundImage = "url(imgs/iphone1.jpg)";
    header.style.backgroundSize = "contain";
    model.innerHTML = "Iphone";
    Iph.style.color = "white";
    Hua.style.color = "white";
    Xp.style.color = "white";
    Sam.style.color = "white";
    iphoneInfo.style.display = "block";
    huaweiInfo.style.display = "none";
    xperiaInfo.style.display = "none";
    samsungInfo.style.display = "none";
    line.style.backgroundColor = "white";
    model.style.color = "white";
}

huawei.onclick = function () {
    header.style.backgroundImage = "url(imgs/huawei11.jpg)";
    header.style.backgroundSize = "cover";
    model.innerHTML = "Huawei";
    Iph.style.color = "white";
    Hua.style.color = "white";
    Xp.style.color = "white";
    Sam.style.color = "white";
    huaweiInfo.style.display = "block";
    iphoneInfo.style.display = "none";
    xperiaInfo.style.display = "none";
    samsungInfo.style.display = "none";
    model.style.color = "white";
    line.style.backgroundColor = "white";


}

xperia.onclick = function () {
    header.style.backgroundImage = "url(imgs/Xperia.jpg)";
    header.style.backgroundSize = "contain";
    model.innerHTML = "Xperia";
    Iph.style.color = "white";
    Hua.style.color = "white";
    Xp.style.color = "white";
    Sam.style.color = "white";
    xperiaInfo.style.display = "block";
    huaweiInfo.style.display = "none";
    iphoneInfo.style.display = "none";
    samsungInfo.style.display = "none";
    model.style.color = "black";
    line.style.backgroundColor = "black";
    xperiaInfo.style.color = "black";
    h2.style.color = "black";
}

samsung.onclick = function () {
    header.style.backgroundImage = "url(imgs/samsung.jpg)";
    header.style.backgroundSize = "cover";
    model.innerHTML = "Samsung";
    Iph.style.color = "black";
    Hua.style.color = "black";
    Xp.style.color = "black";
    Sam.style.color = "black";
    samsungInfo.style.display = "block";
    huaweiInfo.style.display = "none";
    xperiaInfo.style.display = "none";
    iphoneInfo.style.display = "none";
    model.style.color = "black";
    line.style.backgroundColor = "black";
    samsungInfo.style.color = "black";
    h22.style.color = "black";
}