/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
IObserver.js
Sudo Interface wrapper module that the view components 
inherit in order inherit update method called from the pattern.
**/
define(function(){
	(function(exports) {
		"use strict";
		
	function IObserver(){
	
	  this.update = function(){
	  };
	  
	  this.onclick = function(){
	  };	
	}
	
	exports.IObserver = IObserver;
	
	})(this);
	
	return IObserver;
});	