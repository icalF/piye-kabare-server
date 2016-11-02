var messageProduct = require('../models/message');
exports.send = function (product) {
  return product.save()
    .then(function (product) {
      return product;
    })
    .catch(function (err) {
      console.log(err);
    });
};
