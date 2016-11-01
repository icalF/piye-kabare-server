var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    'senderID': Schema.Types.ObjectId,
    'roomID': Schema.Types.ObjectId,
    'content': { type: String },
    'datetime': { type: Date, default: Date.now },
  },
  {
    timestamps: true
  },
  {
    collection: 'messages'
  });

var messages = mongoose.model('messages', messageSchema);

module.exports = messages;
