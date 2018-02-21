var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
  var message = {
    from: 'kimsson',
    text: 'Hey, how are you?'
  }
  socket.emit('createMessage', message);
});

socket.on('newMessageEvent', function(message) {
  console.log('New message ', message);
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})
