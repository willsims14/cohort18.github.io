
"use strict";

app.controller("StudentProfilesCtrl", function($scope, StudentProfiles) {
	let s = $scope;

	s.studentList = [];

	/*
		on app.js there is a .run function that makes a call to our studentProfiles json array.
		We then set that array to an app variable called StudentProfiles.studentArray
		This function is just a watcher that waits for that array to be set, then assigns it
		to a $scope variable (s.studentList) that gets iterated over within StudentProfiles.html
	*/
	s.$watch(
		() => { return StudentProfiles.studentArray; },
		(newValue, oldValue) => {
			s.studentList = newValue;							
		}
	);
});
