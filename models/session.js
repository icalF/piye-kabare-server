var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
    'userId': { type: Schema.Types.ObjectId, required: true},
    'socketId': { type: String, required: true},
  },
  {
    timestamps: true
  },
  {
    collection: 'session'
  });

var session = mongoose.model('session', sessionSchema);

module.exports = session;
