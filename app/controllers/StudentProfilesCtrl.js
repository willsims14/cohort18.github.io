"use strict";

app.controller("StudentProfilesCtrl", function($scope) {
	let s = $scope;
	s.studentCount = 25;

	//Just to prove that this is inherited from HomeCtrl.
	console.log(s.foo); 


	//For a dummy view within StudentProfiles.html
	s.studentList = [];
	for (var i = 0; i < s.studentCount; i++) {
		s.studentList.push({
			name: 'something',
			website: 'somesite.com',
			github: 'github.com',
			linkedin: 'linkedin.com'
		});
	}

});

