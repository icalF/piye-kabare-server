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

exports.load = function (options, page) {
  var lol = 20 * page;
  return messageProduct.find(options)
    .sort( 'createdAt' )
    .skip(lol)
    .limit( 20 )
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
};
