
"use strict";

//All nested views get scope variable connected to this controller
app.controller("TechnologiesCtrl", function($scope, $timeout, TechInfo) {
	let s = $scope;

	s.techInfo = [];

	/*
		on app.js there is a .run function that makes a call to our TechInfo json array.
		We then set that array to an app variable called TechInfo.techInfo
		This function is just a watcher that waits for that array to be set, then assigns it
		to a $scope variable (s.techInfo) that gets iterated over within Technologies.html
	*/
	s.$watch(
		() => { return TechInfo.techInfo; },
		(newValue, oldValue) => {
			s.techInfo = newValue;						
		}
	);
});
