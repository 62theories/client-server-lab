var net = require('net');
var count = 0
var HOST = '127.0.0.1';
var PORT = 6969;
var name = ""
var answer=Math.floor(Math.random() * 21)
console.log('answer is ' + answer.toString())
net.createServer(function(sock) {
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) {
         console.log('client said: ' + data);
   		if(count == 0)
   		{
   			name = data
   			sock.write('OK');
   			count++
   		}
   		else if(data == answer.toString())
   		{
   			sock.write('BINGO');
   			sock.end()
   		}
   		else if(count == 5)
   		{
            sock.write('END');
   			sock.end()
            sock.destroy()
   		}
   		else
   		{
   			sock.write('WRONG');
   			count++
   		}

       
       
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
       sock.destroy();
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);