A Simple List
=============

A user inputs an item into the text field, which is then added to the list on  clicking ‘Add’.

Module implementing the Observer pattern in Vanilla Javascript. Stores & Retrieves its data locally on the 
browser using JSON. Brings together all the view components, controllers & models in context 
& scope Adds new rows when the add text button is clicked I have used - Immediately invoked 
functions - throughout most of my code to reduce lookups I've also kept global namespace 
polution minimal. I've also tried to keep the js code as vanilla as possible. For the 
purpose of this task I'm referencing the count on the counter at the moment through an array 
in the model that talks to the local json object which I would refactor to be more streamline
by storing row value html in the JSON to retrieve from the model on load.
