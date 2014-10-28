/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
SimpleListAddView.js
This class creates & renders most of the view components
I would normally use templates here for the view components time permitting, 
There are also string values which should ultimately be stored in a model 
or constant variable. The two methods at the bottom should be swapped to getters instead.
**/
define(function(){
		(function(exports) {
			  "use strict";
			 
		function SimpleListAddView() {
			this.simpleDiv = document.getElementById('simple_list');
			
			Object.defineProperty(this, 'button', {
				get: function() {
				  return this.simpleAddButton;
				}
			  });
			  
			Object.defineProperty(this, 'ulist', {
				get: function() {
				  return this.simpleUL;
				}
			  });
			  
			Object.defineProperty(this, 'description', {
				get: function() {
				 return this.textValue.value;
				}
			  });
				
			Object.defineProperty(this, 'countView', {
				get: function() {
				 return this.simpleCountDiv;
				}
			  });
		}
			  
		SimpleListAddView.prototype.renderAddArea = function() {
				if(this.simpleDiv)
				this.simpleDiv.innerHTML = '<input id="description" placeholder="Add items to list" /><button id="add_description" >Add</button>';
				this.simpleAddButton = document.getElementById('add_description');
				this.textValue = document.getElementById('description');
		};
		
		SimpleListAddView.prototype.renderUL = function() {
			var renderView = '<ul id="ul_list"></ul>';
			this.simpleAddButton.insertAdjacentHTML('afterend', renderView);
			this.simpleUL = document.getElementById('ul_list');
		}
		
		SimpleListAddView.prototype.renderListCount = function(){
			var countView = '<div id="count_view"></div>';//<p>There are currently ' + items.length + ' items in list.</p>
			this.simpleDiv.insertAdjacentHTML('afterbegin', countView);
			this.simpleCountDiv = document.getElementById('count_view');
		}
		
		SimpleListAddView.prototype.getAddButton = function(){
			return this.simpleAddButton;
		}

		SimpleListAddView.prototype.getListRowContainer = function(){
			return this.simpleUL;
		}
		
		
		exports.SimpleListAddView = SimpleListAddView;
		
	  })(this);
	
	return SimpleListAddView;
});