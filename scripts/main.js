function multiply(num1, num2) { 
  var result = num1 * num2;     
  return result;                
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);   

var myImage = document.querySelector("img"); 
myImage.onclick = function () {  
  var mySrc = myImage.getAttribute("src"); 
  if (mySrc === "images/logo-igromaniya.png"){
    myImage.setAttribute("src", "images/logo-igromaniya2.png"); 
  } else {
  myImage.setAttribute("src", "images/logo-igromaniya.png");  
}
};


var myButton = document.querySelector("button"); 
var myHeading = document.querySelector("h1");  
function setUsername () {  
  var myName = prompt("Пожалуйста представтесь."); 
  localStorage.setItem ("name", myName); 
  myHeading.textContent = "Игромания это плохо " + myName; 
}

if (!localStorage.getItem("name")) { 
  setUsername();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Игромания это плохо " + storedName;
} 

myButton.onclick = function() {
  setUsername();
}; 
