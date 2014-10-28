/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
SimpleRowView.js
This is the view for a single row, consisting of li & Button HTML
The component has the ability to remove itself from its parent
**/
define(function(){

		(function(exports) {
			  "use strict";
			 
		function SimpleRowView(description, id ) {
			this.description = description;
			this.id = id;
			
			this.newLI = document.createElement('li'); 
			var newContent = document.createTextNode(this.description); 
			this.newLI.appendChild(newContent);
			
			this.deleteButton = document.createElement('button'); 
			this.deleteButton.id = this.id;
			var deleteContent = document.createTextNode('Delete'); 
			this.deleteButton.appendChild(deleteContent);
			this.newLI.appendChild(this.deleteButton);
			
			Object.defineProperty(this, 'row', {
				get: function() {
				  return this.newLI;
				}
			  });
			  
			Object.defineProperty(this, 'button', {
				get: function() {
				  return this.deleteButton;
				}
			  });
		}
		
		SimpleRowView.prototype.remove = function(node){
			node.parentNode.removeChild(node);
		}
		
		exports.SimpleRowView = SimpleRowView;
		
	  })(this);
	
	return SimpleRowView;
});