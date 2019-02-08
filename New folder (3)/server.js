var net = require('net');
var count = 0
var HOST = '127.0.0.1';
var PORT = 6969;
var name = ""
var answer = 6
net.createServer(function(sock) {
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) {
   		if(count == 0)
   		{
   			name = data
   			sock.write('OK');
   			count++
   		}
   		else if(data == answer)
   		{
   			sock.write('BINGO');
   			sock.end()
   		}
   		else if(count == 6)
   		{
   			sock.end()
   		}
   		else if(data == 'cleared')
   		{

   		}
   		else
   		{
   			sock.write('WRONG');
   			data = 'cleared'
   			count++
   		}

       
       
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
       sock.destroy();
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);