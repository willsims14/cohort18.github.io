
"use strict";

//All nested views get scope variable connected to this controller
app.controller("SpecialThanksCtrl", function($scope, $timeout, SpecialThanks) {
	let s = $scope;

	s.specialThanksInfo = [];

	s.$watch(
		() => { return SpecialThanks.specialThanks; },
		(newValue, oldValue) => {
			if (s.imageInfo !== undefined) {
				s.specialThanksInfo = newValue;			
				$timeout(function() {
					s.specialThanksInfo.forEach((teacher) => {
						console.log(teacher.name, teacher.teacherPath, teacher.classes, teacher.imgClasses);
					});				
				}, 100);
			}
		}
	);
});
