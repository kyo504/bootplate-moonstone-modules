var
	dispatcher = require('enyo/dispatcher'),
	Control = require('enyo/Control'),
	Spotlight = require('spotlight');

var
	enyo = global.enyo = global.enyo || {};

enyo.$ = dispatcher.$;
enyo.Control = Control;
enyo.Spotlight = Spotlight;

var
	kind = require('enyo/kind'),
	Application = require('enyo/Application');

var
	MainView = require('./views/MainView');

module.exports = kind({
	name: "myapp.Application",
	kind: Application,
	view: MainView
});
