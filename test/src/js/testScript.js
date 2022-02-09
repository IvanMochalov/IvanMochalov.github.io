"use strict"



alert("ПРИВЕТ! Вы попали в раздел <РАСЧЕТ СТОИМОСТИ>!");



let costType = 0;
let termType = 0;
let costDesign = 0;
let termDesign = 0;
let costAdaptive = 0;
let termAdaptive = 0;

let order = [
	["Тип сайта", "Стоимость", "Срок"],
	["Дизайн сайта", "Стоимость", "Срок"],
	["Адаптив сайта", "Стоимость", "Срок"]
]

let type = prompt("Выберите один из трех доступынх типов сайта: Сайт визитка (+3000 руб); Интернет магазин (+5000 руб); Корпоративный сайт (+4000 руб)","Корпоративный сайт");

if (type == "Сайт визитка"){
	costType += 3000;
	termType += 2;
	order[0][0] = type;
	order[0][1] = costType;
	order[0][2] = termType;
}
else if (type == "Интернет магазин"){
	costType += 5000;
	termType += 4;
	order[0][0] = type;
	order[0][1] = costType;
	order[0][2] = termType;
}
else if (type == "Корпоративный сайт"){
	costType += 4000;
	termType += 3;
	order[0][0] = type;
	order[0][1] = costType;
	order[0][2] = termType;
}


console.log(order[0][0]);
console.log(order[0][1]);
console.log(order[0][2]);

let design = prompt("Выберите один из трех доступынх дизайнов сайта: Уникальный дизайн (+5000 руб); Шаблонный дизайн (+3000 руб); Ретро дизайн (+4000 руб)","Ретро дизайн");

if (design == "Уникальный дизайн"){
	costDesign += 5000;
	termDesign += 4;
	order[1][0] = design;
	order[1][1] = costDesign;
	order[1][2] = termDesign;
}
else if (design == "Шаблонный дизайн"){
	costDesign += 3000;
	termDesign += 2;
	order[1][0] = design;
	order[1][1] = costDesign;
	order[1][2] = termDesign;
}
else if (design == "Ретро дизайн"){
	costDesign += 4000;
	termDesign += 3;
	order[1][0] = design;
	order[1][1] = costDesign;
	order[1][2] = termDesign;
}

console.log(order[1][0]);
console.log(order[1][1]);
console.log(order[1][2]);

let adaptive = prompt("Выберите одну из трех доступынх адаптивностей сайта: Chrome 1.0+ (+3000 руб); iOS 1.0+ (+5000 руб); Firefox 1.0+ (+4000 руб)","Firefox 1.0+");

if (adaptive == "Chrome 1.0+"){
	costAdaptive += 3000;
	termAdaptive += 1;
	order[2][0] = adaptive;
	order[2][1] = costAdaptive;
	order[2][2] = termAdaptive;
}
else if (adaptive == "iOS 1.0+"){
	costAdaptive += 5000;
	termAdaptive += 3;
	order[2][0] = adaptive;
	order[2][1] = costAdaptive;
	order[2][2] = termAdaptive;
}
else if (adaptive == "Firefox 1.0+"){
	costAdaptive += 4000;
	termAdaptive += 2;
	order[2][0] = adaptive;
	order[2][1] = costAdaptive;
	order[2][2] = termAdaptive;
}

console.log(order[2][0]);
console.log(order[2][1]);
console.log(order[2][2]);


let carculator = {
	order,
	cost: costType + costDesign + costAdaptive,
	term: termType + termDesign + termAdaptive,	
}

console.log(carculator);


let showResult = confirm(`ВАШ ЗАКАЗ: тип сайта: ${order[0][0]}; дизайн сайта: ${order[1][0]}; адаптивность сайта: ${order[2][0]}; Стоимость: ${carculator.cost} рублей;  Срок выполнения: ${carculator.term} дней.`);


/*
// Конструктор массивов
let arr = new Array(); Равнозначные записи
let arr = []; Равнозначные записи

// BEST Конструктор объектов
function Book (name, age){
	this.name = name;
	this.age = age;
}
let newBook = new Book ("Olga", 53);

console.log(new Book ("Ivan", 25));
console.log(new Book ("Lika", 22));
console.log(newBook);

// Конструктор объектов
function createBook(name, age){
	return {
		name,
		age,
	}
};
console.log(createBook("Victor", "30"));

// Сообщение для пользователя в консоле
function createMessage(text, name){
	return name + ", " + text + "!";
}

function showMessage(message){
	console.log(message);
};

function initMessage(text, name){
	showMessage(createMessage(text, name));
}

initMessage("у вас новое одно сообщение", "Иван")

// Интервалы
let count = 0;

let time = setInterval(function(){
	console.log("Ih");
}, 1000);

let int = setInterval(function(){
	clearInterval(time);
	console.log("Hi");
	count++;
	if (count === 5){
		clearInterval(int);
	}
}, 1000);

// Через 4 секунды всплывает сообщение
let offer = setTimeout(function(){
	alert("Подожди, не уходи. Давай мы тебе сделаем СКИДКУ 50%!!!");
}, 4000)

// Возведение в степень (3^2)
function getCube(numberOne, numberTwo) {
	if (numberTwo === 1) {
		return numberOne;
	}
	else {
		return numberOne * getCube(numberOne, numberTwo - 1);
	}
}
console.log(getCube(3,2));

// Прототип КАРКУЛЯТОРА
alert("ПРИВЕТ! Вы попали в раздел <РАСЧЕТ СТОИМОСТИ>!");
console.log("<РАСЧЕТ СТОИМОСТИ>;");

let sum = 0;

let type = prompt("Выберите один из трех доступынх типов сайта, обозначив его соответствующей цифрой: 1 - САЙТ ВИЗИТКА (3000 руб); 2 - ИНТЕРНЕТ МАГАЗИН (5000 руб); 3 - КОРПОРАТИВНЫЙ САЙТ (4000 руб)",1);

if (type == 1){
	sum += 3000;
	console.log("Вы выбрали ТИП САЙТА: САЙТ ВИЗИТКА - 3000 рублей;");
}
else if (type == 2){
	sum += 5000;
	console.log("Вы выбрали ТИП САЙТА: ИНТЕРНЕТ МАГАЗИН - 5000 рублей;");
}
else if (type == 3){
	sum += 4000;
	console.log("Вы выбрали ТИП САЙТА: КОРПОРАТИВНЫЙ САЙТ - 4000 рублей;");
}

let design = prompt("Выберите один из трех доступынх дизайнов сайта, обозначив его соответствующей цифрой: 1 - УНИКАЛЬНЫЙ ДИЗАЙН (5000 руб); 2 - ШАБЛОННЫЙ ДИЗАЙН (3000 руб); 3 - РЕТРО ДИЗАЙН (4000 руб)",1);

if (design == 1){
	sum += 5000;
	console.log("Вы выбрали ДИЗАЙН САЙТА: УНИКАЛЬНЫЙ ДИЗАЙН - 5000 рублей;");
}
else if (design == 2){
	sum += 3000;
	console.log("Вы выбрали ДИЗАЙН САЙТА: ШАБЛОННЫЙ ДИЗАЙН - 3000 рублей;");
}
else if (design == 3){
	sum += 4000;
	console.log("Вы выбрали ДИЗАЙН САЙТА: РЕТРО ДИЗАЙН - 4000 рублей;");
}

let adaptive = prompt("Выберите одну из трех доступынх адаптивностей сайта, обозначив ее соответствующей цифрой: 1 - Chrome 1.0+ (3000 руб); 2 - iOS 1.0+ (5000 руб); 3 - Firefox 1.0+ (4000 руб)",1);


if (adaptive == 1){
	sum += 3000;
	console.log("Вы выбрали АДАПТИВНОСТЬ САЙТА: Chrome 1.0+ - 3000 рублей;");
}
else if (adaptive == 2){
	sum += 5000;
	console.log("Вы выбрали АДАПТИВНОСТЬ САЙТА: iOS 1.0+ - 5000 рублей;");
}
else if (adaptive == 3){
	sum += 4000;
	console.log("Вы выбрали АДАПТИВНОСТЬ САЙТА: Firefox 1.0+ - 4000 рублей;");
}

if (sum == 0){
	alert("САЙТ НА ВКУС РАЗРАБОТЧИКА - 9000 рублей.");
	console.log("Вы выбрали САЙТ НА ВКУС РАЗРАБОТЧИКА - 9000 рублей;");
	console.log("ИТОГОВАЯ СУММА - 9000 рублей;");
}

else{
	alert("ИТОГОВАЯ СУММА - " + sum + " рублей.");
	console.log("ИТОГОВАЯ СУММА - " + sum + " рублей;");

}
*/