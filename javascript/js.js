


$(document).ready(() => {
    $('.bottongo').on('click', () => {
      $('.block2').show();
      $('.block1').hide();
    });
  })

  $(document).ready(() => {
    $('.bottongotwo').on('click', () => {
      $('.block3').show();
      $('.block2').hide();
    });
  })

  $(document).ready(() => {
    $('.display2').on('click', () => {
      $('.block4').show();
      $('.block3').hide();
    });
  })

  $(document).ready(() => {
    $('.displaylog').on('click', () => {
      $('.block5').show();
      $('.block4').hide();
    });
  })

  $(document).ready(() => {
    $('.loadingball').on('click', () => {
      $('.block6').show();
      $('.block5').hide();
    });
  })

  $(document).ready(() => {
    $('.bottongothree').on('click', () => {
      $('.block7').show();
      $('.block6').hide();
    });
  })

  $(document).ready(() => {
    $('.block7').on('click', () => {
      $('.block8').show();
      $('.block7').hide();
    });
  })

  $(document).ready(() => {
    $('.block8').on('click', () => {
      $('.block9').show();
      $('.block8').hide();
    });
  })

  $(document).ready(() => {
    $('.block9').on('click', () => {
      $('.block11').show();
      $('.block9').hide();
    });
  })

  $(document).ready(() => {
    $('.block11').on('click', () => {
      $('.block12').show();
      $('.block11').hide();
    });
  })

  $(document).ready(() => {
    $('.block12').on('click', () => {
      $('.block13').show();
      $('.block12').hide();
    });
  })

  $(document).ready(() => {
    $('.loadingballtwo').on('click', () => {
      $('.block14').show();
      $('.block13').hide();
    });
  })

  $(document).ready(() => {
    $('.block14').on('click', () => {
      $('.block15').show();
      $('.block14').hide();
    });
  })

  $(document).ready(() => {
    $('.yes').on('click', () => {
      $('.block1').show();
      $('.block15').hide();
    });
  })

  $(document).ready(() => {
    $('.no').on('click', () => {
      $('.block16').show();
      $('.block15').hide();
    });
  })

  $(document).ready(() => {
    $('.block16').on('click', () => {
      $('.block1').show();
      $('.block16').hide();
    });
  })


  $(document).ready(() => {
    $('.block16').on('click', () => {
      $('.block1').show();
      $('.block16').hide();
    });
  })



//   $( function() {
//     $( "#dialog" ).dialog();
//   } );

$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );


    var text = "ОДНАЖДЫ МНЕ ПРИСНИЛСЯ СТРАШНЫЙ СОН, ПРО МОНСТРА, КОТОРЫЙ ПЫТАЛСЯ ПОГЛАТИТЬ МЕНЯ..."; 
	var delay = 180; 
	var elem = document.getElementById("result"); 
	var print_text = function(text, elem, delay) {
		if(text.length > 0) {
			elem.innerHTML += text[0];
			setTimeout(
				function() {
					print_text(text.slice(1), elem, delay);  
				}, delay
			);
		}	
	}
	print_text(text, elem, delay);

	




    var text = "ДУМАЮ,МНЕ ПОНАДОБИТСЯ ТВОЯ ПОМОЩЬ, ЧТОБЫ СТЕРЕТЬ ЕГО ИЗ СВОЕЙ ПАМЯТИ."; // Ваш текст
	var delay = 180; // Скорость печатания
	var elem = document.getElementById("result2"); // id элемента для вывода результата
	var print_text = function(text, elem, delay) {
		if(text.length > 0) {
			elem.innerHTML += text[0];
			setTimeout(
				function() {
					print_text(text.slice(1), elem, delay);  
				}, delay
			);
		}
	}
	print_text(text, elem, delay);



	var text = "ЗНАЕШЬ, Я ВСПОМНИЛ ЧУДНУЮ ПОЕЗДКУ НА МАЯК СО СВОИМИ РОДИТЕЛЯМИ"; 
	var delay = 180; 
	var elem = document.getElementById("result3"); 
	var print_text = function(text, elem, delay) {
		if(text.length > 0) {
			elem.innerHTML += text[0];
			setTimeout(
				function() {
					print_text(text.slice(1), elem, delay);  
				}, delay
			);
		}	
	}
	print_text(text, elem, delay);



    var text = "ЭТО БЫЛО ТАК ПРЕКРАСНО...ПОКА НА МОИХ ГЛАЗАХ НЕ УБИЛИ МОЮ МАТЬ.... "; // Ваш текст
	var delay = 180; // Скорость печатания
	var elem = document.getElementById("result4"); // id элемента для вывода результата
	var print_text = function(text, elem, delay) {
		if(text.length > 0) {
			elem.innerHTML += text[0];
			setTimeout(
				function() {
					print_text(text.slice(1), elem, delay);  
				}, delay
			);
		}
	}
	print_text(text, elem, delay);

	$( function() {
		$( "#monster" ).sortable();
		$( "#monster" ).disableSelection();
	  } );


	showblood.onmouseover = function() {
	showblood.style.backgroundImage = "url('img/Finalydisplay.svg')";
	};

	showblood.onmouseleave = function() {
	showblood.style.backgroundImage = "url('img/bloodfinal.svg')";
	};


	var text = "Я ОЧЕНЬ ЛЮБИЛ ЛЕС ВОЗЛЕ ДОМА, ДО БОЛЬНИЦЫ МЫ ЧАСТО ГУЛЯЛИ ТАМ.."; 
	var delay = 180; 
	var elem = document.getElementById("result5"); 
	var print_text = function(text, elem, delay) {
		if(text.length > 0) {
			elem.innerHTML += text[0];
			setTimeout(
				function() {
					print_text(text.slice(1), elem, delay);  
				}, delay
			);
		}	
	}
	print_text(text, elem, delay);



    var text = "НО ОДНАЖДЫ ВО ВРЕМЯ ПРОГУЛКИ С МИКСОНОМ, ДЕМОН СЪЕЛ ЕГО...КРОВЬ БЫЛА ВЕЗДЕ..."; // Ваш текст
	var delay = 180; // Скорость печатания
	var elem = document.getElementById("result6"); // id элемента для вывода результата
	var print_text = function(text, elem, delay) {
		if(text.length > 0) {
			elem.innerHTML += text[0];
			setTimeout(
				function() {
					print_text(text.slice(1), elem, delay);  
				}, delay
			);
		}
	}
	print_text(text, elem, delay);


	$('.ewleaf1').click(function(){
		$(this).hide();
	   });
	   $('.ewleaf2').click(function(){
		$(this).hide();
	   });
	   $('.ewleaf3').click(function(){
		$(this).hide();
	   });
	
	   $('.uberi1').click(function(){
		$('.bubblepop').show();
	   })
	
	   $('.helpfrog').click(function(){
		$('.block4').hide();
		$('.block2').show();
	   })



// let popup = document.getElementById('window'),
//     popupToggle = document.getElementById('myBtn'),
//     popupClose = document.getElementById('myBtnclose');

//     popupToggle.onclick = function( {
//         popup.style.display="block";
//     })

