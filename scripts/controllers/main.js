'use strict';

/**
 * @ngdoc function
 * @name 1stYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1stYeomanApp
 */
angular.module('1stYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    }
  });
