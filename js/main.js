// scroll 
$(function() {   /*для загрузки файлов эта запись*/
    $("[data-scroll]").on("click", function(event){   /*указание условия действия по клику, при клике функция*/
        event.preventDefault();  /*отменение стандартного поведения ссылок*/
        blockId = $(this).data('scroll'); /*переменная с обращением через this, затем получаем дата атрибут и в () его название*/
               
        blockOffset = $(blockId).offset().top; /* смещение блока, переменная выше, метод, и откуда мерить (топ)*/
        
        $("html, body").animate({  /* анимация для html and body*/
            scrollTop: blockOffset - 50   /*откуда скрол и отступ сверху 50 пискелей*/
        }, 700);    /*время прокрутки*/
    });
});

//hamburger
var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});

// typeit script 

new TypeIt("#companionMethods", {
	speed: 100,
	waitUntilVisible: true,
	startDelay: 3000
  })
	.type("Helll!", {delay: 200})
	.move(-1)
	.delete(1)
	.type('o')
	.move('END')
	//new line
	.break({delay: 500})
	.type(' My name is vlad ')
	.pause(300)
	.delete(5)
	.type('Vlad Yanukovich.')
	.pause(300)
	.move('END')
	.pause(500)
	.break({delay: 500})
	//new line
	.type('I`m Front-end developer.')
	.move(-14)
	.delete(-1)
	.pause(400)
	.type('E')
	.move(14)
	.go();


//modal window
var modal = $('.modal');
$('.show-modal').click(function(event) {
	event.preventDefault();
 	modal.fadeIn();
});

$('.close-modal').click(function() {
 modal.fadeOut();
});

// darktheme


// preloader 
$(window).on('load', function () {
  window.setTimeout(function () {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
  }, 2000);
});
