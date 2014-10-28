/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
Model.js
For the purpose of this task Im retrieving the values from local storage
Im also only sending the values to local json storage 
when the page unloads at the moment in order to send and load the data once. 
In most cases with and existing service for the model I'd likely load 
once & send it instantly. This created dual scenarios where the model deals with real time
data such as new rows added during run time and the stored data seperately.
Theres also a scenario of storing existing rows in the model, ultimately I would have tied this 
all to addItem/Remove Item.
**/
define(function(){
	(function(exports) {
		"use strict";
		
	function Model(){
		var items = [];
		var observersOnStage = [];
		var items = JSON.parse(localStorage.items);
			localStorage.items = JSON.stringify(items);
		var windowUnload=false;
		var loadingFromLocal = true;

		Object.defineProperty(this, 'localItem', {
				set: function(val) {
				  items = val;
				},
				get: function() {
					return items;
			}
		});
		Object.defineProperty(this, 'loadingFromLocal', {
				set: function(val) {
				  loadingFromLocal = val;
				},
				get: function() {
					return loadingFromLocal;
			}
		});
		Object.defineProperty(this, 'observersOnStage', {
				set: function(val) {
				  observersOnStage = val;
				},
				get: function() {
					return observersOnStage;
			}
		});
		
		Object.defineProperty(this, 'rowCount', {
				get: function() {
					return observersOnStage.length;
			}
		});
		
		Model.prototype.removeRow = function(val){
			observersOnStage.splice(observersOnStage-1,1);
		}
		Model.prototype.addRow = function(val){
			observersOnStage.push(val);
		}
		Model.prototype.addItem = function(val){
			items.push(val)
		}
		Model.prototype.removeItem = function(val){
			items.splice( val, 1 );
		}

		window.onunload = window.onbeforeunload =  function(){
			if (windowUnload) return;
			windowUnload=true;
			localStorage.items = items;
			localStorage.items = JSON.stringify(items);
		}
	}
	
	exports.Model = Model;
	
	})(this);
	
	return Model;
});	