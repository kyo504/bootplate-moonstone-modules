var
	kind = require('enyo/kind');

var
	Panels = require('moonstone/Panels'),
	Panel = require('moonstone/Panel'),
	IconButton = require('moonstone/IconButton'),
	BodyText = require('moonstone/BodyText');

module.exports = kind({
	name: "myapp.MainView",
	kind: Panels,
	classes: "moon enyo-fit",

	components: [
		{
			kind: Panel,
			title: "Hello World",
			headerComponents: [
				{kind: IconButton, src: "assets/icon-like.png"}
			],
			components: [
				{kind: BodyText, content: "Your content here"}
			]
		}
	]
});
