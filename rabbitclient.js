console.log('1');

// Connect to server
var io = require('socket.io-client');
// var socket = io.connect('http://localhost:8083', {reconnect: true});
var socket = io('http://localhost:8080');
console.log('2');

socket.emit("findRoom",'5818af2d7142924d54f6b284');

var roomData = {};
roomData.nameGroup = "keluargaical";
roomData.userId1 = '5818af2d7142924d54f6b284';
roomData.userId2 = '5819c49a08760b40bd884861';
socket.emit("chat",roomData);

socket.on('connect', function(socket) {
    console.log('Connected!');
});
socket.on('register_status', function(data) {
    console.log(data);
});
socket.on('findUser_resp', function(data) {
    console.log(data);
});

socket.on('chat_resp', function(data) {
    console.log(data);
});

socket.on('findRoom_resp', function(data) {
    console.log(data);
});
socket.on('getUserData_resp', function(data) {
    console.log(data);
});
console.log('3');
