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
	// После полного скрола изображения оно прогружается
	let opt = {threshold: [1.0]};
	let observ = new IntersectionObserver(onLoad, opt);
	let element = $('.uploading-image');
	element.each((i,el) => {
		observ.observe(el);
	});
	// Прогрузка анимированных элементов
	function onEntry (entry){
		entry.forEach(change => {
			if (change.isIntersecting){
				change.target.classList.add('show-animation');
			}
		});
	}
	// Прогрузка изображений
	function onLoad (load){
		load.forEach(change => {
			if (change.isIntersecting){
				change.target.src = change.target.dataset.src;
			}
		});
	};
	$(window).scroll(function(){
	let scrollDistance = $(window).scrollTop();
	// Выделение разделов навигации
	$(".section").each((i, el) => {
		if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
			$(".navigation a").each((e, el) => {
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
	alert("Подожди, не уходи. Давай мы тебе сделаем СКИДКУ 50%!!!");
}, 4000)

// Колесо прогрузки пропадает после загрузки
$(".loader").css('display', 'none');
});



	































