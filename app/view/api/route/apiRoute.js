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

};
