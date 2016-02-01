define([
	'jquery',
	'underscore'
], function($) {

	var doModel = function() {
		console.log('Model is doing something');
	}

	return  {
		doModel: doModel
	};

});