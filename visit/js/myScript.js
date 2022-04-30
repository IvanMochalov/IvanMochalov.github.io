"use strict"

// После полной прогрузки страницы выполняется следующее
$(document).ready(function(){
	
	// После скрола половины анимированного элемента включается анимация
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
	$(window).on("scroll",function(){
	let scrollDistance = $(window).scrollTop();
	$(".section").each((i, el) => {
		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
			$(".navigation a").each((i, el) => {
				if ($(el).hasClass("active")){
					$(el).removeClass("active");
				}
			});
			if (i != 0){
				$('nav li:eq('+ i +')').find('a').addClass('active');
			}
		}
	});
	});
	// Отступ сверху для Якорных ссылок
	$('a[href^="#"]').on("click",function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 78 + "px"});
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



	// Открытие в модальном окне изображений
	$('.image-link').magnificPopup({type:'image'});


	// Колесо прогрузки пропадает после загрузки
	$(".loader").css('display', 'none');

	// Калькулятор раздела Расчет стоимости
	let lastCost = false;
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
	let calculator = {
		order,
		cost: 0,
		term: 0,	
				
	};
	


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
	calculator = {
		order,
		cost: costType + costDesign + costAdaptive,
		term: termType + termDesign + termAdaptive,	
	}
	console.log(calculator);
	$('select').on("change",function(){
		$('#term').val(calculator.term);
	});
	$('select').on("change",function(){
		$('#cost').val(calculator.cost);
		if (lastCost){
			calculator = {
				order,
				cost: (costType + costDesign + costAdaptive)*0.5,
				term: termType + termDesign + termAdaptive,	
				};
				$('#cost').val(calculator.cost + " (с учетом скидки)");
		}
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
	calculator = {
		order,
		cost: costType + costDesign + costAdaptive,
		term: termType + termDesign + termAdaptive,	
	}
	console.log(calculator);
	$('select').on("change",function(){
		$('#term').val(calculator.term);
	});
	$('select').on("change",function(){
		$('#cost').val(calculator.cost);
		if (lastCost){
			calculator = {
				order,
				cost: (costType + costDesign + costAdaptive)*0.5,
				term: termType + termDesign + termAdaptive,	
				};
				$('#cost').val(calculator.cost + " (с учетом скидки)");
		}
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
	calculator = {
		order,
		cost: costType + costDesign + costAdaptive,
		term: termType + termDesign + termAdaptive,	
	}
	console.log(calculator);
	$('select').on("change",function(){
		$('#term').val(calculator.term);
	});
	$('select').on("change",function(){
		$('#cost').val(calculator.cost);
		if (lastCost){
			calculator = {
				order,
				cost: (costType + costDesign + costAdaptive)*0.5,
				term: termType + termDesign + termAdaptive,	
				};
				$('#cost').val(calculator.cost + " (с учетом скидки)");
		}
	});
	});
	
	// Слайдер в главном меню
	$('.slider0').slick({
		arrows: false,
		dots: false,
		fade: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		easing: 'ease',
		pauseOnFocus: false,
		pauseOnHover: false,
		centerMode: true,
		adaptiveWidth: true,
		infinite: true,
	});
	
	// Слайдер раздела КЕЙСЫ
	$('.slider1').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: false,
		initialSlide: 2,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnFocus: true,
		draggable: false,
		swipe: false,
		touchMove: false,
		asNavFor:".slider1_1"

	});

	$('.slider1_1').slick({
		arrows: false,
		dots: false,
		fade: true,
		initialSlide: 2,
		speed: 1000,
		infinite: false,
		asNavFor:".slider1"
	});

	// Слайдер раздела ОТЗЫВЫ 
	$('.slider2').slick({
		arrows:false,
		fade: true,
		dots:true,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnFocus: true,
		pauseOnHover: false,
		pauseOnDotsHover: true,
		waitForAnimate: true,
		centerMode: true,

	});

	
	// Предложение скидки
	/*
	let showDiscount = setInterval(function(){
		if ($("#TypeSite option:selected").val() !== "Выберите..." && $("#DesignSite option:selected").val() !== "Выберите..." && $("#AdaptiveSite option:selected").val() !== "Выберите...") {
			let offer = setTimeout(function(){

			if (confirm("Как первому клиенту мы тебе предлагаем СКИДКУ 50%!")){
				let calculator = {
				order,
				cost: (costType + costDesign + costAdaptive)*0.5,
				term: termType + termDesign + termAdaptive,	
				};
				$('#cost').val(calculator.cost + " (с учетом скидки)");
				lastCost = true;
			}
			else {
				lastCost = false;
			}
			}, 5000);
				clearInterval(showDiscount);
				}
			}, 1000);
	*/
// Плагиын для формы
$("#inputTel").mask("+7 (999) 999-99-99");




// Обработчик для функции отправки заявки на заказ
$('#user_form').on("submit",function(event){
	event.preventDefault();

	$.ajax({
		type: "POST",
		url: "php/mail.php",
		data: $(this).serialize()
	}).done(function (){
		$(this).find("input").val("");
		$('.btn-primary')[0].click();
		$("#user_form").trigger("reset");
		calculator.cost = 0;
		calculator.term = 0;
		calculator.order = 0;
		console.log(calculator);
	});
	return false;
});


// Wow js код для запуска анимации на анимированных элементах после скрола до них
// new WOW().init();

});