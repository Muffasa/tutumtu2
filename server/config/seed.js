/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Fruit = require('../api/fruit/fruit-model');

Fruit.find({}).remove(function() {
  Fruit.create(
  {name : 'Banana'},
  {name : 'Clementine'},
  {name : 'Kiwi'},
  {name : 'Melon'},
  {name : 'Plum'},
  {name : 'Watermelon'},
  {name : 'Watermelonzzz'},
  function () {
    console.log('>> Finished populating fruits');
  });
});
