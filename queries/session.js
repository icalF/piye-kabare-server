var sessionProduct = require('../models/session');
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
  return sessionProduct.find(options)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};
