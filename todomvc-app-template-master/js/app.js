(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var myApp = angular.module('app',[]);
	myApp.controller('MainController', ['$scope', function($scope){
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
		}	

	}]);
})(angular);
