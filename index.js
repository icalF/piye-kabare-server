var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('lodash');
var uuid = require('uuid');
var rabbitMq = require('amqp').createConnection({ host: 'localhost' });
// app.configure(function () {
//   app.use(express.static(__dirname + '/public'));
//   app.use(express.errorHandler({
//     dumpExceptions: true,
//     showStack: true
//   }));
// });

// var amqp = require('amqplib/callback_api');
// amqp.connect('amqp://localhost', function(err, conn) {
//   conn.createChannel(function(err, ch) {
//     var ex = 'message_q';
//     // var args = process.argv.slice(2);
//     var key = "a.5818af2d7142924d54f6b284.5819c49a08760b40bd884861.a";
//     var roomData = {};
//     roomData.nameGroup = "keluargaical";
//     roomData.userId1 = '5818af2d7142924d54f6b284';
//     roomData.userId2 = '5819c49a08760b40bd884861';
//     var msg = JSON.stringify(roomData);
//
//     ch.assertExchange(ex, 'topic', {durable: false});
//     ch.publish(ex, key, new Buffer(msg));
//     console.log(" [x] Sent %s:'%s'", key, msg);
//   });
//
//   setTimeout(function() { conn.close(); process.exit(0) }, 500);
// });
//
var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = '5818af2d7142924d54f6b284';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used

    var roomData = {};
    roomData.nameGroup = "keluargaical";
    roomData.userId1 = '5818af2d7142924d54f6b284';
    roomData.userId2 = '5819c49a08760b40bd884861';

    ch.sendToQueue(q, new Buffer(JSON.stringify(roomData)));
    console.log(" [x] Sent 'Hello World!'");
      var q = '5819c49a08760b40bd884861';
      ch.assertQueue(q, {durable: false});
      // Note: on Node 6 Buffer.from(msg) should be used
      ch.sendToQueue(q, new Buffer('Hello World!'));
      console.log(" [x] Sent 'Hello World2!'");
  });
  //
  // conn.createChannel(function(err, ch) {
  // });
});

rabbitMq.on('ready', function () {
  io.sockets.on('connection', function (socket) {
    var queue = rabbitMq.queue('my-queue');

    queue.bind('#'); // all messages

    queue.subscribe(function (message) {
      socket.emit('message-name', message);
    });
  });
});

app.listen(8080, function () {
  console.log('listening on *:8080');
});
