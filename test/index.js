var utterances = require('../');
var test       = require('tap').test;


test('optional custom slot types', function (t) {
  var dictionary = {};
  var slots = {"Artist": "CUSTOM_TYPE","ROOM_NAME": "AMAZON.Room"};
  var template = "{my|your} {favorite|least favorite} fruit is {-|Fruit} {in +ROOM_NAME+|}";

  var result = utterances(template, slots, dictionary);
  t.deepEqual(result, [
    "my favorite fruit is {Fruit} in {ROOM_NAME}",
    "your favorite fruit is {Fruit} in {ROOM_NAME}",
    "my least favorite fruit is {Fruit} in {ROOM_NAME}",
    "your least favorite fruit is {Fruit} in {ROOM_NAME}",
    "my favorite fruit is {Fruit}",
    "your favorite fruit is {Fruit}",
    "my least favorite fruit is {Fruit}",
    "your least favorite fruit is {Fruit}"
  ]);
  t.end();
});
