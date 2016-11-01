var UserProduct = require('../models/user');

var bcrypt = require('bcrypt-nodejs');
exports.register = function (product) {
  return product.save()
    .then(function (product) {
      return product._id;
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.find = function (options) {
  return UserProduct.find(options)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.login = function (options) {;
  // bcrypt.genSalt(5, function(err, salt) {
  //   bcrypt.hash(options.password, salt, null, function(err, hash) {
  //       options.password = hash;
  //   });
  // });
  return UserProduct.find(options)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};
