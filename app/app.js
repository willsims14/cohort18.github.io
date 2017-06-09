"use strict";


//Using angular-ui-route and angular-ui-bootstrap
var app = angular.module("ClassWebsite", ['ui.router', 'ui.bootstrap'])

/*
	This gets updated on app.run at the bottom of the file
	There is a $s.$watch() waiting for this on HomeCtrl.js
*/
.service('StudentProfiles', function() {
	this.studentArray = [];
})
.service('TechInfo', function() {
	this.techInfo = [];
})
.service('SpecialThanks', function() {
	this.specialThanks = [];
})

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/cohort-18');
	// HOME STATES AND NESTED VIEWS ========================================

	$stateProvider
	//Home handles everything
	.state('home', {
		url: '/cohort-18',
		views: {
			"": {
				templateUrl: 'partials/Home.html',
				controller: 'HomeCtrl'
			}
		}
	});
})


/*
	As soon s the page runs, we make a call to our JSON file representing all students.
	This JSON array gets assigned to StudentProfiles.studentArray to be iterated over
	There is a $s.$watch() that waits for this to be completed within HomeCtrl.js
	The array gets iterated over within StudentProfiles.html
*/
.run(($http, StudentProfiles, TechInfo, SpecialThanks) => {

	$http.get('../json/StudentProfiles.json').then(
			(studentProfilesJson) => {
				StudentProfiles.studentArray = studentProfilesJson.data;
				$http.get('../json/TechInfo.json').then(
					(techInfoJson) => {
						TechInfo.techInfo = techInfoJson.data;
						$http.get('../json/SpecialThanks.json').then(
							(specialThanksInfo) => SpecialThanks.specialThanks = specialThanksInfo.data
						);						
					}
				);
			}
		);
});
