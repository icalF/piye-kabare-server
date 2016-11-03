
//
// var args = process.argv.slice(2);
//
// if (args.length == 0) {
//   console.log("Usage: receive_logs_topic.js <facility>.<severity>");
//   process.exit(1);
// }
//
// amqp.connect('amqp://localhost', function(err, conn) {
//   conn.createChannel(function(err, ch) {
//     var ex = 'message_q';
//
//     ch.assertExchange(ex, 'topic', {durable: false});
//
//     ch.assertQueue('', {exclusive: true}, function(err, q) {
//       console.log(' [*] Waiting for logs. To exit press CTRL+C');
//
//       args.forEach(function(key) {
//         ch.bindQueue(q.queue, ex, key);
//       });
//
//       ch.consume(q.queue, function(msg) {
//         console.log(" [x] %s:'%s'", msg.fields.routingKey, msg.content.toString());
//       }, {noAck: true});
//     });
//   });
// });

var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = '5818af2d7142924d54f6b284';

    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});

  });
});
