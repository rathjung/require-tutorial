define(['jquery', 'models/model', 'controllers/controller', 'views/view'], function($, model, controller, view){

	var app = {};
	app.init = function(){
		model.doModel();
		controller.doController();
		view.doView();
	};

	return app;

});
