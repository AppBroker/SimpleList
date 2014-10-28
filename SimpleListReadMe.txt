Simple List Setup

The source for the task is located inside \SimpleList\public\js
Testing folder located inside \SimpleList\test
The server currently redirects to build folder for running built project as the node js \SimpleList\build if you would like to run the files keep that in mind.
I usually wouldnt send the build folder to the repository but for ease of running through it Ive included it for now (My dev environment builds using grunt to that folder)
I have included the server file I used for SimpleList as well inside \SimpleList\server
To keep things simple Ive not included any less/sass/grunt files that are usually in my build env

Source Files Included:

Main.js
Entry module, required initially by requirejs

Model.js
For the purpose of this task Im retrieving the values from local storage
Im also only sending the values to local json storage 
when the page unloads at the moment in order to send and load the data once. 
In most cases with and existing service for the model I'd likely load 
once & send it instantly. This created dual scenarios where the model deals with real time
data such as new rows added during run time and the stored data seperately.
Theres also a scenario of storing existing rows in the model, ultimately I would have tied this 
all to addItem/Remove Item.

IObserver.js
Sudo JS Interface wrapper module that the view components 
inherit in order inherit update method called from the pattern.

SimpleListAddView.js
This class creates & renders most of the view components
I would normally use templates here for the view components time permitting, 
There are also string values which should ultimately be stored in a model 
or constant variable. The two methods at the bottom should be swapped to getters instead.

SimpleListCountView.js
A binding example below appropriately binds the view & data together
for the change/update from the Observer pattern 

SimpleRowView.js
This is the view for a single row, consisting of li & Button HTML
The component has the ability to remove itself from its parent

App.js
Module implementing the Observer pattern Stores & Retrieves its data locally on the 
browser using JSON. Brings together all the view components, controllers & models in context 
& scope Adds new rows when the add text button is clicked I have used - Immediately invoked 
functions - throughout most of my code to reduce lookups I've also kept global namespace 
polution minimal. I've also tried to keep the js code as vanilla as possible. For the 
purpose of this task I'm referencing the count on the counter at the moment through an array 
in the model that talks to the local json object which I would refactor to be more streamline
by storing row value html in the JSON to retrieve from the model on load.

Many thanks
Ryan McLaughlin