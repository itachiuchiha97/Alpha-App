from socketIO_client import SocketIO, LoggingNamespace


def on_aaa_response(*args):
    print('on_aaa_response', args)
    execfile('/home/ssb/Desktop/capella/public/scripts/tamatar.py')

socketIO = SocketIO('10.10.74.54', 42100, LoggingNamespace)

if __name__ == "__main__":
    
    while True:
        socketIO.on('Data_A_Emit_Server', on_aaa_response)
        socketIO.wait(seconds=1)
