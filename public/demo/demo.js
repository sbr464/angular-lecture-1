//Modules : name and dependencies

var myModule = angular.module('myModule', []);

//Controllers

myModule.controller('myController', function($scope){
  // console.log('Controller is run!');
  // console.log($scope);
  $scope.name = 'Chris';

  $scope.user = {
    name: 'Chris',
    color: 'blue'
  }

  $scope.printName = function(){
    console.log('Color is:', $scope.user.color);
  };
});

myModule.controller('dataController', function($scope, myService, myFactory){
  console.log(myService, myFactory);
  $scope.service = myService;
  $scope.factory = myFactory;
});

// dependency injection, minification safe
/*
myModule.controller('myController', [function($scope){
  console.log('Controller is run!');
  console.log($scope);
}]);
*/



//Services and Factories:
myModule.service('myService', function(){
  this.message = 'Hello World, from service!';
});


//Factory

myModule.factory('myFactory', function(){
  var message = 'Hello World, from factory!'

  return {
    message: message   
  };
});

//Directives

myModule.directive('prime', function(){
  return {
    restrict: 'E',
    template: '<h1>Don\'t Mess with those peoples</h1>'
  };
});


//Filters

myModule.filter('pigLatin', function(){
  return function(str){
    var raw = str.split('');
    raw.push(raw.shift());
    return raw.join('') + 'ay';
  };
});