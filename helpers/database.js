var configDB = require('../config/database.js');
var mongoose = require('mongoose');

const databases = {
  test: 'test',
  main: 'main'
};

exports.databases = databases;

exports.connect = function (database) {
  if (mongoose.connection.readyState === 0) {
    mongoose.Promise = global.Promise;

    switch (database) {
      case 'test':
        mongoose.connect(configDB.testUrl);
        break;
      default:
        mongoose.connect(configDB.url);
    };

  }
};
