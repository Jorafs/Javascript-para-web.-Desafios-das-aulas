const tecladoNumerico = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]')

	for (let numeros = 0; numeros < tecladoNumerico.length; numeros ++){

		const tecla = tecladoNumerico[numeros]

			tecla.onclick=function(){
				inputTel.value = inputTel.value + tecla.value
		}
			tecla.onkeydown = function (evento) {
			    if(evento.code === "Enter" || evento.code === "Space") {
			    tecla.classList.add('ativa');
			    }
			  }
			  tecla.onkeyup = function () {
			    tecla.classList.remove('ativa');
			  }
	}

