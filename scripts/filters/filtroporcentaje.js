angular.module('tallerDadoApp')
  .filter('filtroPorcentaje', ['$filter',filtroPorcentajeFilter]);

  function filtroPorcentajeFilter($filter) {
  //usage {{"text" | filtroPorcentaje: "suffix"}}
  //returns 'filtroPorcentaje filter: text suffix'
    return function(input,decimals){
    	return $filter('number')(input * 100, decimals) + '%';
    }   
    
  }

