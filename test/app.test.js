/** 
Simple List
AppBrokerLtd || Ryan McLaughlin
app.test.js
**/
suite('App', function() {
  test('App should be present', function() {
    assert.ok(window.simpleList);
  });
  test('App object constructor returns and is an object', function() {
    assert.isTrue(window.simpleList.constructor === Object);
  });
});

