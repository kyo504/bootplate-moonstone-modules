var
	kind = require('enyo/kind'),
	ready = require('enyo/ready');

var
	Application = require('./src/app');

ready(function(){
	new Application({name: "app"});
})