var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('lodash');
var uuid = require('uuid');
var User = require('./models/user');
var userQ = require('./queries/user');
var Friend = require('./models/friend');
var friendQ = require('./queries/friend');
var Room = require('./models/room');
var roomQ = require('./queries/room');
var RoomUser = require('./models/roomuser');
var roomuserQ = require('./queries/roomuser');
var Message = require('./models/message');
var messageQ = require('./queries/message');
// var Room = require('models/room');

io.on('connection', function (client) {
  // TODO: push queue

  /* User */
  client.on('register', function (userData) {
      // var userData = {
      //   "username" : "icalF",
      //   "password" : "ganteng"
      // };
      var UserModel = {};
      _.forOwn(userData, function (value, key) {
        UserModel[key] = value;
      });
      var options = {};
      options.username = UserModel["username"];
      userQ.find(options).then(function (res) {
        if (res.length > 0) {
          console.log("something");
          return;
        }
        userQ.register(new User(UserModel));
      });

  });

  client.on('login', function(credential) {
    // body...
    var credential = {};
    credential.username = "icalF";
    credential.password = "ganteng";
    userQ.login(credential).then(function (res) {
      if (res.length < 1) {
        console.log("something");
        return;
      }
      //generate token
    });
  });

  client.on('add_friend', function (uname, fname) {
    var options = {};
    options.username = uname;
    userQ.find(options).then(function (res) {
      if (res.length != 1) {
        console.log("error, no name");
        return;
      }
      var u1 = res[0].id;
      options.username = fname;
      userQ.find(options).then(function (res) {
        if (res.length != 1) {
          console.log("error, no name");
          return;
        }
        var u2 = res[0].id;
        var FriendModel = {};
        FriendModel["userID"] = u1;
        FriendModel["userID2"] = u2;
        friendQ.find(FriendModel).then(function (res) {
          if (res.length > 0) {
            console.log("wis friend");
            return;
          }
          friendQ.add(new Friend(FriendModel));RoomUser
        });
      });
    });
  });

  client.on('findUser', function (uname) {
    var options = {};
    options.username = uname;
    userQ.find(options).then(function (res) {
      if (res.length > 0) {
        console.log("something");
        return;
      }
      userQ.register(new User(UserModel));
    });
  });

  /* Room */

  client.on('findRoom', function (uname) {
    var options = {};
    options.username = uname;
    userQ.find(options).then(function (res) {
      if (res.length > 0) {
        console.log("something");
        return;
      }
      userQ.register(new User(UserModel));
    });
  });

  client.on('create', function (roomData) {
    var nameGroup = roomData.nameGroup;
    var options = {};
    options.username = roomData.uname;
    userQ.find(options).then(function (res) {
        if (res.length != 1) {
          console.log("error, no name");
          return;
        }
        var roomData = {
          "nameGroup" : nameGroup,
          "adminId" : res[0].id,
        };
        var RoomModel = {};
        _.forOwn(roomData, function (value, key) {
          RoomModel[key] = value;
        });
        roomQ.create(new Room(RoomModel)).then(function (res2) {
          var roomUserData = {
            "roomId" : res2,
            "userId" : roomData["adminId"],
          };
          var RoomUserModel = {};
          _.forOwn(roomUserData, function (value, key) {
            RoomUserModel[key] = value;
          });
          roomuserQ.add(new RoomUser(RoomUserModel));
        });
    });
    // body...
  });

  client.on('add', function (roomId, memberId) {
    var roomUserData = {
      "roomId" : roomId,
      "userId" : memberId,
    };

    var RoomUserModel = {};
    _.forOwn(roomUserData, function (value, key) {
      RoomUserModel[key] = value;
    });

    roomuserQ.add(new RoomUser(RoomUserModel));
    // body...
  });

  client.on('kick', function (roomId, memberId) {
    // body...
  });

  /* Chat */
  client.on('send', function (senderId, roomId, content) {
    // body...
    var messageData = {
    "senderID" : senderId,
    "roomID" : roomId,
    "content" : content,
    };

    var MessageModel = {};
    _.forOwn(messageData, function (value, key) {
    MessageModel[key] = value;
    });

    messageQ.send(new Message(MessageModel)).then(function (res) {
      console.log(res);
    });
  });


});

app.listen(8080, function () {
  console.log('listening on *:8080');
});
