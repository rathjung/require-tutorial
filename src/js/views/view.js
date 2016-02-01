define([
	'jquery',
	'underscore',
	'text!templates/template.html'
], function($, _, template) {

	var doView = function() {
		console.log('View is doing something');
	}

	$('body').html(template);

	return  {
		doView: doView
	};

});