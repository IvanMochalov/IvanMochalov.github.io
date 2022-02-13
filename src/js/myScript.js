"use strict"

// После полной прогрузки страницы выполняется следующее
$(document).ready(function(){
	// При скроле анимированного элемента включается анимация
	let options = {threshold: [0.5]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.element-animation');
	elements.each((i,el) => {
		observer.observe(el);
	});
	// Прогрузка анимированных элементов
	function onEntry (entry){
		entry.forEach(change => {
			if (change.isIntersecting){
				change.target.classList.add('show-animation');
			}
		});
	}
	// После полного скрола изображения оно прогружается
	let opt = {threshold: [1.0]};
	let observ = new IntersectionObserver(onLoad, opt);
	let element = $('.uploading-image');
	element.each((i,el) => {
		observ.observe(el);
	});
	// Прогрузка изображений
	function onLoad (load){
		load.forEach(change => {
			if (change.isIntersecting){
				change.target.src = change.target.dataset.src;
			}
		});
	};
	// Выделение разделов навигации
	$(window).scroll(function(){
	let scrollDistance = $(window).scrollTop();
	$(".section").each((i, el) => {
		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
			$(".navigation a").each((i, el) => {
				if ($(el).hasClass("active")){
					$(el).removeClass("active");
				}
			});

			$('nav li:eq('+ i +')').find('a').addClass('active');
		}
	});
	});
	// Отступ сверху для Якорных ссылок
	$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 40 + "px"});
	});
	// Параметры демонстрации цифр в разделе "СТАТИСТИКА"
	const time = 2500;
	const step = 1;
	// Задаёт демонстрацию цифр в разделе Статистика
	function outNum(num, elem){
		let l = document.querySelector('#' + elem);
		let n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
			if (n == num) {
				clearInterval(interval);
			}
			l.innerHTML = n;
		}, t);
	};
	let option = {threshold: [0.5]};
	let obser = new IntersectionObserver(onCar, option);
	let elemen = $('.out-num');
	elemen.each((i,el) => {
		obser.observe(el);
	});
	let flag = true; 
	// Демонстирурет цифры в разделе Статистика
	function onCar (car){
		car.forEach(change => {
			if (change.isIntersecting&&flag){
				outNum(154, 'out-1');
				outNum(538, 'out-2');
				outNum(248, 'out-3');
				outNum(39, 'out-4');
				outNum(154, 'out-5');
				outNum(538, 'out-6');
				outNum(248, 'out-7');
				outNum(39, 'out-8');
				flag = false;
			} 
		});
	} 

// Предложение скидки
let offer = setTimeout(function(){
	alert("Как первому клиенту мы тебе сделаем СКИДКУ 30%!");
}, 30000);

 // Предложение скидки при курсоре вне страницы (очень не удоюно XD)
$('body').mouseleave(function(){
	alert("Подожди, не уходи. Давай мы тебе сделаем СКИДКУ 50%!!!");
});


// Колесо прогрузки пропадает после загрузки
$(".loader").css('display', 'none');

// Раздел Расчет стоимости
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
];
let cost = 0;
let term = 0;


// Выбор типа
const type = document.querySelector('#TypeSite');
type.addEventListener("change", function() {
  const type = document.querySelector('#TypeSite');
  if (type.value == "Сайт визитка"){
	costType = 3000;
	termType = 2;
	order[0][0] = type.value;
	order[0][1] = costType;
	order[0][2] = termType;
}
else if (type.value == "Интернет магазин"){
	costType = 5000;
	termType = 4;
	order[0][0] = type.value;
	order[0][1] = costType;
	order[0][2] = termType;
}
else if (type.value == "Корпоративный сайт"){
	costType = 4000;
	termType = 3;
	order[0][0] = type.value;
	order[0][1] = costType;
	order[0][2] = termType;
}
console.log(order);
let calculator = {
	order,
	cost: costType + costDesign + costAdaptive,
	term: termType + termDesign + termAdaptive,	
}
console.log(calculator);
$('select').change(function(){
	$('#term').val(calculator.term);
});
$('select').change(function(){
	$('#cost').val(calculator.cost);
});
});
// Выбор дизайна
const design = document.querySelector('#DesignSite');

design.addEventListener("change", function() {
  const design = document.querySelector('#DesignSite');
  if (design.value == "Уникальный дизайн"){
	costDesign = 5000;
	termDesign = 4;
	order[1][0] = design.value;
	order[1][1] = costDesign;
	order[1][2] = termDesign;
}
else if (design.value == "Шаблонный дизайн"){
	costDesign = 3000;
	termDesign = 2;
	order[1][0] = design.value;
	order[1][1] = costDesign;
	order[1][2] = termDesign;
}
else if (design.value == "Ретро дизайн"){
	costDesign = 4000;
	termDesign = 3;
	order[1][0] = design.value;
	order[1][1] = costDesign;
	order[1][2] = termDesign;
}
console.log(order);
let calculator = {
	order,
	cost: costType + costDesign + costAdaptive,
	term: termType + termDesign + termAdaptive,	
}
console.log(calculator);
$('select').change(function(){
	$('#term').val(calculator.term);
});
$('select').change(function(){
	$('#cost').val(calculator.cost);
});
});
// Выбор адаптива
const adaptive = document.querySelector('#AdaptiveSite');

adaptive.addEventListener("change", function() {
  const adaptive = document.querySelector('#AdaptiveSite');
  if (adaptive.value == "Chrome 1.0+"){
	costAdaptive = 3000;
	termAdaptive = 1;
	order[2][0] = adaptive.value;
	order[2][1] = costAdaptive;
	order[2][2] = termAdaptive;
}
else if (adaptive.value == "iOS 1.0+"){
	costAdaptive = 5000;
	termAdaptive = 3;
	order[2][0] = adaptive.value;
	order[2][1] = costAdaptive;
	order[2][2] = termAdaptive;
}
else if (adaptive.value == "Firefox 1.0+"){
	costAdaptive = 4000;
	termAdaptive = 2;
	order[2][0] = adaptive.value;
	order[2][1] = costAdaptive;
	order[2][2] = termAdaptive;
}
console.log(order);
let calculator = {
	order,
	cost: costType + costDesign + costAdaptive,
	term: termType + termDesign + termAdaptive,	
}
console.log(calculator);
$('select').change(function(){
	$('#term').val(calculator.term);
});
$('select').change(function(){
	$('#cost').val(calculator.cost);
});
});



});