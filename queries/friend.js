var FriendProduct = require('../models/friend');

// var bcrypt = require('bcrypt-nodejs');
exports.add = function (product) {
  return product.save()
    .then(function (product) {
      return product ;
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.search = function (options) {
  return FriendProduct.find(options)
    .then(function (res) {
        return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.find = function (options) {
  return FriendProduct.find(options)
    .then(function (res) {
      if (res.length == 0) {
        var temp = options.userID;
        options.userID = options.userID2;
        options.userID2 = temp;
        return FriendProduct.find(options)
          .then(function (res) {
            return res;
          })
          .catch(function (err) {
            console.log(err);
          });
      }
      else {
        return res;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
};
