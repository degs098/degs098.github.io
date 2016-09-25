/**
 * @ngdoc function
 * @name tallerDadoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tallerDadoApp
 */

var arregloData = [0,0,0,0,0,0];

angular.module('tallerDadoApp',["chart.js"]).controller('MainCtrl', ['$scope', 'calcularFrecuenciaService', function ($scope, calcularFrecuenciaServicio) {    
    $scope.labels = ['Cara 1', 'Cara 2', 'Cara 3', 'Cara 4', 'Cara 5', 'Cara 6'];      
    $scope.series = ['Frecuencia'];
    $scope.experimentoCant = null;      
    $scope.frecuenciaCaras = function(){    
      arregloData = calcularFrecuenciaServicio.calcularFrecuencia($scope.experimentoCant);  
      $scope.data = arregloData;
    };  
}]);




