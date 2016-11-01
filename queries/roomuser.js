var roomUserProduct = require('../models/roomuser');
exports.add = function (product) {
  return product.save()
    .then(function (product) {
      return product._id;
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.find = function (options) {
  return roomUserProduct.find(options)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};
