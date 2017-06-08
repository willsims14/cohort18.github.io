
"use strict";

//All nested views get scope variable connected to this controller
app.controller("TechnologiesCtrl", function($scope, $timeout, ImageInfo) {
	let s = $scope;

	s.imageInfo = [];

	s.$watch(
		() => { return ImageInfo.imageInfo; },
		(newValue, oldValue) => {
			s.imageInfo = newValue;			
			if (s.imageInfo.length > 0) {
				$timeout(function() {							
				}, 100);
			}
		}
	);
});
