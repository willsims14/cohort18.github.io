
"use strict";

console.log("HomeCtrl.js is connected");

//All nested views get scope variable connected to this controller
app.controller("HomeCtrl", function($scope) {
	let s = $scope;
	s.foo = 'hello world'; 

});

