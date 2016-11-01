var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    'nameGroup': { type: String},
    'adminId':  Schema.Types.ObjectId,
    'datetime': { type: Date, default: Date.now },
  },
  {
    timestamps: true
  },
  {
    collection: 'room'
  });

var room = mongoose.model('room', roomSchema);

module.exports = room;
