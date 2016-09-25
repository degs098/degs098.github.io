/**
 * @ngdoc function
 * @name tallerDadoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tallerDadoApp
 */



angular.module('tallerDadoApp',["chart.js"]).controller('MainCtrl', ['$scope', 'calcularFrecuenciaService', function ($scope, calcularFrecuenciaServicio) {    
    $scope.labels = ['Cara 1', 'Cara 2', 'Cara 3', 'Cara 4', 'Cara 5', 'Cara 6'];      
    $scope.series = ['Frecuencia'];
    $scope.colors = ['#1e88e5'];
    $scope.experimentoCant = null;      
    $scope.frecuenciaCaras = function(){    
      $scope.arregloData = calcularFrecuenciaServicio.calcularFrecuencia($scope.experimentoCant);  
      $scope.data = [$scope.arregloData];
    };  
}]);




