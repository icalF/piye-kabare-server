var mongoose  = require('mongoose');
var dbHelper = require('../helpers/database');
dbHelper.connect(dbHelper.databases.main);
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
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
//

// UserSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password'))
//     return next();
//   else
//     user.hash(user.password, function(err, hash) {
//       user.password = hash;
//       next(null, hash);
//     });
//  });
// 
//  UserSchema.methods.verifyPassword = function(password, callback) {
//    this.hash(password, function(err, hash) {
//       bcrypt.compare(password, hash, function(err, isMatch) {
//         if (err) return callback(err);
//         else callback(null, isMatch);
//       });
//     });
//   };
//
// UserSchema.methods.hash = function(password, callback) {
//   bcrypt.genSalt(5, function(err, salt) {
//     if (err) return callback(err);
//     else bcrypt.hash(password, salt, null, function(err, hash) {
//       if (err) return callback(err);
//       else callback(null, hash);
//     });
//   });
// };

var user = mongoose.model('user', UserSchema);

module.exports = user;
