var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;

var roomUserSchema = new Schema({
    'romeId': Schema.Types.ObjectId,
    'userId':  Schema.Types.ObjectId,
  },
  {
    timestamps: true
  },
  {
    collection: 'roomUser'
  });

var roomUser = mongoose.model('roomUser', roomUserSchema);

module.exports = roomUser;
