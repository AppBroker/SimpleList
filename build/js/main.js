/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
Main.js
Entry module, required initially by requirejs
**/
requirejs.config({
  baseUrl: "js"
});

require(['App'],

function(App) {
	var application = new App();
	window.simpleList = application;
});