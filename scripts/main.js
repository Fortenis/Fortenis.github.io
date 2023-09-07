/*var myHeading = document.querySelector("h1");  Мы захватили функцией querySelector наш селектор с html и присвоили ему перменную под именнем myHeading, чтоб потом обращаться только к нему

myHeading.textContent = "Hello world!"; Мы обратились к переменной и задали ей функцию которая меняет текст контет на указанный


var iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
} /* это условие if ... else Оно проверяет если переменная равна if то выполнаяет одну функцию, если нет то выполняет функцию else*/


function multiply(num1, num2) { //Мы обьявили свою функцию
  var result = num1 * num2;     // указали действия функции
  return result;                // Попросили возрващать результат функции
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);   // проверяем функцию на работо спасобность (работает)


/*document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};  Мы присвоили документу html функцию котрая реагирует на клик по странице и вызывает окно*/


var myImage = document.querySelector("img"); //мы присвоили селектор img в переменную myImage
myImage.onclick = function () {  //Создаем фунцию при нажати на картинку
  var mySrc = myImage.getAttribute("src"); // Создали новую переменную которая добовляет к нашей переменной функицю с изменением src
  if (mySrc === "images/logo-igromaniya.png"){
    myImage.setAttribute("src", "images/logo-igromaniya2.png"); //установили усливоие если картинка равна первоначальной то её нужно изменить на 2 картинку
  } else {
  myImage.setAttribute("src", "images/logo-igromaniya.png");  // елси же  не ровна то она устанавливает на первоначальную картинку
}
};


var myButton = document.querySelector("button"); // Создали переменную в которой заключили селектор кнопки на нашем сайте
var myHeading = document.querySelector("h1");  // Создали пременную в которой заключили селектор нашего заголовка на нашем сайте
function setUsername () {  //создали функцию  которая при входе просит вести сообщение
  var myName = prompt("Пожалуйста представтесь."); //создали переменную с функцие всплывающего окна 
  localStorage.setItem ("name", myName); //создали локальное хранилище, в котором будет храниться информация которую ввел посетитель
  myHeading.textContent = "Игромания это плохо " + myName; //создали функцию котораю меняет наш заголовок на текст и берет информацию из хранилища
}

if (!localStorage.getItem("name")) { // создаем условие с оператора отрицания ! чтобы проверить есть ли информация в локальном хранилище под именем name. Если же информации нету, то выполнаяется функиция setUserName для их создания
  setUsername();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Игромания это плохо " + storedName;
} // Если же данные существует то он берет их и меняет наш заголовок на измененный текст.

myButton.onclick = function() {
  setUsername();
}; // Присвоили кнопке функцию которую создали ранее и по её нажатии можно будет менять свое имя
