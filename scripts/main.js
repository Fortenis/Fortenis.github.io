var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute ("src");
    if (mySrc === "images/logo.png") {
        myImage.setAttribute ("src", "images/logo2.png");
    } else {
        myImage.setAttribute ("src", "images/logo.png");
    }
};
var myButton = document.querySelector ("button");
var myHeading = document.querySelector("h1");
function setUserName () {
    var myName = prompt ("Пожалуйста укажите ваше имя.");
    localStorage.setItem ("name", myName);
    myHeading.textContent = "Привет " + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Привет " + storedName;
}
myButton.onclick = function() {
    setUserName();
};