var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    'senderID': { type: Schema.Types.ObjectId, required: true},
    'roomID': { type: Schema.Types.ObjectId, required: true},
    'content': { type: String , required: true},
    'datetime': { type: Date, default: Date.now },
  },
  {
    timestamps: true
  },
  {
    collection: 'message'
  });

var messages = mongoose.model('message', messageSchema);

module.exports = messages;
