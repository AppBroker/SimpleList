/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
Subject.js
**/
define(['model/ObserverList'], function(ObserverList){
	(function(exports) {
		"use strict";
		
		function Subject(){
		  this.observers = new ObserverList();
		  
		  Object.defineProperty(this, 'observerCurrCount', {
			 get: function() {
				  return this.observers.count();
				}
			});
		}
		 
		Subject.prototype.addObserver = function( observer ){
		  this.observers.add( observer );
		};
		 
		Subject.prototype.removeObserver = function( observer ){
		  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
		};
		 
		Subject.prototype.notify = function( context ){
		  var observerCount = this.observers.count();
		  for(var i=0; i < observerCount; i++){
			this.observers.get(i).update( context );
		  }
		};
		exports.Subject = Subject;
	
	})(this);
	
	return Subject;
});	