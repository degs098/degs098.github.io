angular.module('tallerDadoApp')
  .service('calcularFrecuenciaService', calcularFrecuenciaService);  

function calcularFrecuenciaService(){

	this.calcularFrecuencia = calcularFrecuencia;	

	function random(min, max){
		var num = Math.floor(Math.random() * (max-min)+min);
		return num;
	}

	function calcularFrecuencia(cantidadExperimento){
		var datos = [0,0,0,0,0,0];
		var number = 0;
		for (var i = 1; i <= cantidadExperimento; i++) {
			number = random (1,7);

			datos[number-1] = datos[number-1] + 1;
		}
		return datos;
	}
}