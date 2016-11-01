var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;

var friendSchema = new Schema({
    'userID': { type: Schema.Types.ObjectId, required: true},
    'userID2': { type: Schema.Types.ObjectId, required: true},
  },
  {
    timestamps: true
  },
  {
    collection: 'friend'
  });

var messages = mongoose.model('friend', friendSchema);

module.exports = messages;
