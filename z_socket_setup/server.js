var express = require('express')

var socket = require('socket.io')

var app = express()

var server = app.listen(42100,function(){
    console.log("Listening to port 4000")
})

var io = socket(server)
app.use(express.static('public'))

io.on('connection',function(socket){
    console.log('made connection to socket fo')
    console.log(socket.id)
    socket.on('aaa', function (data) {
        console.log(data);
        str = data
        io.sockets.emit('aaa_data',str)

      });
    
    
    socket.on('ccc',function(data){
        console.log(data)
        io.sockets.emit('ccc_data',data)

    })
})

