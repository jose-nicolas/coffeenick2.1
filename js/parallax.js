$(document).ready(function(){


	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 1000)
		{
			var scroll = $(window).scrollTop();
			$('header .textos').css({
				//translate(0px, 50px) 0 horizontal 50 vertical
				//el valor del scroll va variando, aqui concatenas 1 cadena, una operacion y una cadena
				'transform': 'translate(0px, '+ scroll/2 +'%)'
			});

			$('.acerca-de article').css({
				//translate(0px, 50px)
				//el valor del scroll va variando, aqui concatenas 1 cadena, una operacion y una cadena
				'transform': 'translate(0px, -'+ scroll/4 +'%)'//"-" para que el acerca de suba y no baje
			});
		}
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 1000){
			$('.acerca-de article').css({
				//translate(0px, 50px)
				//el valor del scroll va variando, aqui concatenas 1 cadena, una operacion y una cadena
				'transform': 'translate(0px,0px)'//regresamos el article a su forma original
			});
		}
	});//si estas en una tablet y giras la pantalla
});