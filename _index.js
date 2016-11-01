var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('lodash');
var uuid = require('uuid');

io.on('connection', function (client) {
  // TODO: push queue

  /* User */
  client.on('register', function (userData) {
    // body...
  });
  client.on('login', function(credential) {
    // body...
  });
  client.on('add_friend', function (uname) {
    // body...
  });

  /* Room */
  client.on('find', function (friendId) {
    // body...
  });
  client.on('create', function (roomData) {
    // body...
  });
  client.on('add', function (memberId) {
    // body...
  });
  client.on('kick', function (memberId) {
    // body...
  });

  /* Chat */
  client.on('send', function (roomId) {
    // body...
  });
});