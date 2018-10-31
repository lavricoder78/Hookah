//= ../../bower_components/jquery/dist/jquery.js
//= ../../libs/nice_scroll.js

$(document).ready(function(){
	$(window).on("mousemove", function(e){
		var wWidth = $(window).width();
		var wHeight = $(window).height();

		var offsetX = 0.5 - e.pageX / wWidth;
		var offsetY = 0.5 - e.pageY / wHeight;

		$(".parallax").each(function(i,el){
			var offset = parseInt($(el).data("offset"));

			var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px";

			$(el).css({
				"transform":translate
			});
		});
	});
	$(".down").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top + 102}, 1000);
	});

	$("h1, .down, .header .center .more").addClass("active");

	$(window).scroll(function() {
		$('.item').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).removeClass("hidden_box_clear");
				$(this).addClass('animated fadeInDown slow');
			}
		});

		$('.header .about_us p, .header .about_us h2.logo').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				$(this).addClass('active');
			}
		});
	});

	if($(window).width()<640){
		$(".item").removeClass("hidden_box_clear");
	}
	else{
		$(".item").addClass("hidden_box_clear");
	}

});