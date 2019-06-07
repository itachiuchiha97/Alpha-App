from socketIO_client import SocketIO, LoggingNamespace



if __name__ == "__main__":
    # for connecting to socket server
    socketIO = SocketIO('10.10.74.54', 42100)
    # replace the ip with local ip address of server running machine; don't use localhost as it's unavailable for remote machine to properly access the sockets

    while True:
        socketIO.emit('Data_A','Data A from Python client')
        #socketIO.wait(seconds=1)
        socketIO.emit('Data_C','Data C from Python client')
        #socketIO.wait(seconds=1)
