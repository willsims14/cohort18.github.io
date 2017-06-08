
"use strict";

//All nested views get scope variable connected to this controller
app.controller("SpecialThanksCtrl", function($scope, $timeout, SpecialThanks) {
	let s = $scope;

	s.specialThanksInfo = [];

	s.$watch(
		() => { return SpecialThanks.specialThanks; },
		(newValue, oldValue) => {
			console.log(newValue, oldValue);
			s.specialThanksInfo = newValue;			
			if (s.imageInfo.length > 0) {
				$timeout(function() {
					s.specialThanksInfo.forEach((teacher) => {
						console.log(teacher.name, teacher.teacherPath, teacher.classes, teacher.imgClasses);
					});				
				}, 100);
			}
		}
	);
});
