(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('app',['ngRoute']);

	myApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider
          .when('/:status?',{
          	controller: 'MainController',
          	templateUrl: 'main_tmpl'
          })
          .otherwise({redirectTo: '/'});
	}]);


	myApp.controller('MainController', [
		'$scope', 
		'$routeParams',
		'$route'
		function($scope,$routeParams,$route){
		$scope.todos=[
			{
				id:0.123,
				text: '吃饭',
				completed:false
			},{
				id:0.321,
				text: '睡觉',
				completed:true
			},{
				id:0.451,
				text: '打豆豆',
				completed:false
			}
		];

		$scope.text = '';
		//add
		$scope.add = function(){
			$scope.todos.push({
				id: Math.random(),
				text: $scope.text,
				completed:false
			});
		};	
		//remove
		$scope.remove = function(id){
			for(var i =0;i<$scope.todos.length;i++){
				if($scope.todos[i].id == id){
					$scope.todos.splice(i,1);
				}
			}
		};
		//clearCompleted
		$scope.clearCompleted = function(){
			var result = [];
			for(var i=0;i<$scope.todos.length;i++){
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
		};
		//check whether to show "clear completed" button or not
		$scope.existCompleted = function(){
			for(var i=0;i<$scope.todos.length;i++){
				if($scope.todos[i].completed){
					return true;
				}
			}
			return false;
		};
		//currentEditing
		$scope.currentEditing = -1;
		$scope.editing = function(id){
			$scope.currentEditing = id;
		};
		//save editing text
		$scope.save = function(){
			$scope.currentEditing = -1;
		};
		//全选toggleAll
		$scope.toggleAll = true;
		$scope.toggle = function(){
			for(var i=0;i<$scope.todos.length;i++){
				$scope.todos[i].completed= $scope.toggleAll;
			}
			$scope.toggleAll = !$scope.toggleAll;
		};
		//filter
		$scope.selector = {};
		var status = $routeParams.status;
		switch(status){
			case 'active':
				$scope.selector={completed:false};
				break;
			case 'completed':
				$scope.selector={completed:true};
				break;
			default:
				$route.updateParams({status:''});
				$scope.selector={};
				break;
		}
		

	}]);
})(angular);
