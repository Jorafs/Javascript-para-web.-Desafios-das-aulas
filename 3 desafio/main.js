//Um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado, imprima o valor no campo Digite seu telefone.
const tecladoNumerico = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]')

	for (let numeros = 0; numeros < tecladoNumerico.length; numeros ++){

		const tecla = tecladoNumerico[numeros]

			tecla.onclick=function(){
				inputTel.value = inputTel.value + tecla.value
		}
		}


