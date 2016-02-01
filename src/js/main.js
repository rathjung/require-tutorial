require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    text: 'libs/requirejs-text/text',
    backbone: 'libs/backbone/backbone-min',
    rath: 'libs/testlibs'
  },
  shim: {
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
});

require(['app'], function(app){

	app.init();

})


// define(function(require, exports, module){
// 	var $ = require('jquery');
// 	var module1 = require('module1');
// 	var module2 = require('module2');

// 	module1.doSomething();
// 	module2.doSomething();

// 	exports.doAnotherThing = function(){
// 		doAnotherThing()
// 	} ;

// });