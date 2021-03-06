'use strict';

const medalController = require('../controller/medalController');

const databaseController = require('../controller/databaseController');


module.exports = function(app) {
  app.route('/api/medal/:id')
    .get(medalController.read);
  app.route('/api/medal/search')
    .post(medalController.search);
  app.route('/api/bdd/:table')
    .get(databaseController.list);
  app.route('/api/bdd/searchcountry')
    .post(databaseController.listcountry);
  app.route('/api/bdd/track')
    .post(databaseController.medal_track);
  app.route('/api/bdd/track2')
    .post(databaseController.medal_track2);
  app.route('/api/bdd/searchdate')
    .post(databaseController.searchdate)
  };
