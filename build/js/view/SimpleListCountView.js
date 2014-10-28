/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
SimpleListCountView.js
A binding example below appropriately binds the view & data together
for the change/update from the Observer pattern 
**/
define(function(){
	(function(exports) {
		"use strict";
		
	function SimpleListCountView(element){
		this.data = 0;
		this.element = element;
		element.innerHTML = 'There are currently ' + this.data + ' items in the list';
		element.addEventListener('change', this, false);
	}
	
	SimpleListCountView.prototype.handleEvent = function(event) {
		switch (event.type) {
			case 'change': this.change(event.data);
		}
	};

	SimpleListCountView.prototype.change = function(value) {
		this.data = 'There are now ' + value + ' items in the list';
		this.element.innerHTML = this.data;
	};
 
	exports.SimpleListCountView = SimpleListCountView;
	
	})(this);
	
	return SimpleListCountView;
});	