var express = require('express')

var socket = require('socket.io')

var app = express()

var server = app.listen(42100,function(){
    console.log("Listening to port 42100")
})

var io = socket(server)
app.use(express.static('public'))

io.on('connection',function(socket){
    console.log('made connection to socket fo')
    console.log(socket.id)
    socket.on('Data_A', function (data) {
        console.log(data);
        str = data
        io.sockets.emit('Data_A_Emit_Server',str)
      });
    
    socket.on('Data_C',function(data){
        console.log(data)
        io.sockets.emit('Data_C_Emit_Server',data)
    })
})

