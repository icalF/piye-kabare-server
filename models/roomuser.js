var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;

var roomUserSchema = new Schema({
    'roomId': { type: Schema.Types.ObjectId, required: true},
    'userId': { type: Schema.Types.ObjectId, required: true},
  },
  {
    timestamps: true
  },
  {
    collection: 'roomUser'
  });

var roomUser = mongoose.model('roomUser', roomUserSchema);

module.exports = roomUser;
