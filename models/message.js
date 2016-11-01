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
    collection: 'messages'
  });

var messages = mongoose.model('messages', messageSchema);

module.exports = messages;
