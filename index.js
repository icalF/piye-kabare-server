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
