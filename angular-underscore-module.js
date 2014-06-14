/**
 * Let's you use underscore as a service from a controller.
 * Got the idea from: http://stackoverflow.com/questions/14968297/use-underscore-inside-controllers
 * @author: Andres Aguilar https://github.com/andresesfm
 * Modified following http://stackoverflow.com/a/23984685/2701374
 */
angular.module('underscore', [])
	// allow DI for use in controllers, unit tests
	.constant('_', window._)
	// use in views, ng-repeat="x in _.range(3)"
	.run(function ($rootScope) {
	$rootScope._ = window._;
	});
