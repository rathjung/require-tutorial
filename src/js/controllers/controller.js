define([
	'jquery',
	'underscore'
], function($, _) {

	var doController = function() {
		console.log('Controller is doing something');
	}

	return  {
		doController: doController
	};

});