const path = require('path');
const http = require('http');
const _ = require('lodash')
const express = require('express');
const socketIO = require('socket.io');

var publicPath = path.join(__dirname, '../public/');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {

  socket.on('createMessage', (data) => {
    var createdAt = new Date().getTime();
    var message = {
      from: data.from,
      text: data.text,
      createdAt
    };
    console.log('Message ', message);
    socket.emit('newMessageEvent', message);
  })
});


app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Started on port ${port}`);
})
