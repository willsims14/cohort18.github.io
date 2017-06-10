
"use strict";

app.controller("SpecialThanksCtrl", function($scope, SpecialThanks) {
	let s = $scope;

	s.specialThanksInfo = [];

	/*
		on app.js there is a .run function that makes a call to our SpecialThanks json array.
		We then set that array to an app variable called SpecialThanks.specialThanks
		This function is just a watcher that waits for that array to be set, then assigns it
		to a $scope variable (s.specialThanksInfo) that gets iterated over within SpecialThanks.html
	*/
	s.$watch(
		() => { return SpecialThanks.specialThanks; },
		(newValue, oldValue) => {
			s.specialThanksInfo = newValue;						
		}
	);
});
