var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
       username: { type: String, required: true, unique: true },
       password: { type: String, required: true },
       createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true
  },
  {
    collection: 'user'
  });

userSchema.pre('save', function(err, hash) {
    bcrypt.compare(password, hash, function(err, isMatch) {
      if (err) return callback(err);
      else callback(null, isMatch);
    });
  });

userSchema.methods.hash = function(password, callback) {
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);
    else bcrypt.hash(password, salt, null, function(err, hash) {
      if (err) return callback(err);
      else callback(null, hash);
    });
  });
};

var user = mongoose.model('user', userSchema);

module.exports = user;
