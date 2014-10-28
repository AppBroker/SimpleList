/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
App.js
Module implementing the Observer pattern Stores & Retrieves its data locally on the 
browser using JSON. Brings together all the view components, controllers & models in context 
& scope Adds new rows when the add text button is clicked I have used - Immediately invoked 
functions - throughout most of my code to reduce lookups I've also kept global namespace 
polution minimal. I've also tried to keep the js code as vanilla as possible. For the 
purpose of this task I'm referencing the count on the counter at the moment through an array 
in the model that talks to the local json object which I would refactor to be more streamline
by storing row value html in the JSON to retrieve from the model on load.
**/
define(['model/Item'
		, 'controller/Subject'
		, 'controller/IObserver'
		, 'view/SimpleListAddView'
		, 'view/SimpleRowView'
		, 'view/SimpleListCountView'
		, 'model/Model'], 
function(Item
		, Subject
		, Observer
		, SimpleListAddView
		, SimpleRowView
		, SimpleListCountView
		, Model) {
		
		(function(exports) {
		  "use strict";
		 
		  function App() {

				function extend( extension, obj ){
				  for ( var key in extension ){
					obj[key] = extension[key];
				  }
				}
				
				var model = new Model();
				
				var simpleListAddView = new SimpleListAddView();
				simpleListAddView.renderAddArea();
				simpleListAddView.renderUL();
				simpleListAddView.renderListCount();
				var addListRowBtn = simpleListAddView.button;
				var listRowContainer = simpleListAddView.ulist;
				
				var simpleListCountView = new SimpleListCountView(simpleListAddView.countView);
				
				extend( new Observer(), simpleListCountView);

				startFromJSON();
				
				function startFromJSON(){
				var count = model.localItem.length;
				console.debug(count);
				console.debug(count);
					for(var i=0;i<count;i++){
						addNewObserver(model.localItem[i]);
						console.debug(model.localItem[i]);
					}
					model.loadingFromLocal = false;
				}
				
				function addLocalJSON(str){
					 model.addItem(str);
				}
				
				function removeLocalJSON(index){
					  model.removeItem(index);
				}

				addListRowBtn.onclick = function addRowClicked(){addNewObserver(simpleListAddView.description);};
			
				function addNewObserver(description){
				console.debug("addNewObserver descriton : "+description);
					if(description != ''){
						var simpleRow = new SimpleRowView(description, model.rowCount);
						var deleteBut = simpleRow.button;
						  
						listRowContainer.appendChild( simpleRow.row );
						model.addRow(simpleRow.row);
						
						if(!model.loadingFromLocal)
							addLocalJSON(simpleRow.description);
							
						var inheritSubject = new Subject();
						  
						extend(inheritSubject, deleteBut);
						extend(inheritSubject, simpleRow);
						  
						inheritSubject.addObserver(deleteBut);
						  
						deleteBut.onclick = function(value){
							this.notify(simpleListCountView);
							model.removeRow();
							simpleListCountView.change(model.rowCount);
							removeLocalJSON(this.id);
						}	

						deleteBut.update = function(value){
							this.removeObserver(value);
							simpleRow.update(value);
						}
							
						simpleRow.update = function(value){
							simpleListCountView.change(inheritSubject.observerCurrCount);
							this.removeObserver(value);
							this.remove(this.row);
						}
						simpleListCountView.change(model.rowCount);
					}
				}
		  }
		  
		  exports.App = App;
		 
		})(this);

	return App;
});