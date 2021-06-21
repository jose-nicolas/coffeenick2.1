$(document).ready(function(){

//Efecto menu principal
	$('.menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});
		$(this).animate({
			top: '0'
		},1000 + (index * 500));//aqui tarda 2 segs mas el contador *500
	});
	
//Efecto header
	if( $(window).width() > 800 ){//checas ancho de ventana
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});
		$('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}
//Scroll Elementos Menu

	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		alta = $('#alta').offset().top,
		prov = $('#prov').offset().top
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 100
		},700);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu 
		},700);
	});

	$('#btn-alta').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: alta 
		},700);
	});

	$('#btn-prov').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: prov 
		},700);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion 
		},700);
	});

});