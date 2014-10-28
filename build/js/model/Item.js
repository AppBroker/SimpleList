/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
Item.js
**/
define(function(){
     	(function(exports) {
		
    function Item(description){
        this.description = description || 'Item Description';
    }
     
	exports.Item = Item;
	
	})(this);
	
	return Item;
});