$(document).ready(() => {
    $('.bottongo').on('click', () => {
      $('.block2').show();
      $('.block1').hide();
      let obstacleInterval = setInterval(moveObstacle, 5);
    });
  })

  $(document).ready(() => {
    $('.bottongo').on('click', () => {
      $('.block3').show();
      $('.block2').hide();
      let obstacleInterval = setInterval(moveObstacle, 5);
    });
  })



    var text = "ОДНАЖДЫ МНЕ ПРИСНИЛСЯ СТРАШНЫЙ СОН, ПРО МОНСТРА, КОТОРЫЙ ПЫТАЛСЯ ПОГЛАТИТЬ МЕНЯ..."; // Ваш текст
	var delay = 180; // Скорость печатания
	var elem = document.getElementById("result"); // id элемента для вывода результата

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


// let popup = document.getElementById('window'),
//     popupToggle = document.getElementById('myBtn'),
//     popupClose = document.getElementById('myBtnclose');

//     popupToggle.onclick = function( {
//         popup.style.display="block";
//     })
