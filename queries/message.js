var messageProduct = require('../models/message');
exports.create = function (product) {
  return product.save()
    .then(function (product) {
      return product._id;
    })
    .catch(function (err) {
      console.log(err);
    });
};
