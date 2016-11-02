var roomProduct = require('../models/room');
exports.create = function (product) {
  return product.save()
    .then(function (product) {
      return product._id;
    })
    .catch(function (err) {
      console.log(err);
    });
};
exports.find = function (options) {
  return roomProduct.find(options)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};
