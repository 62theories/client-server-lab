var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var count = 0;
var name;
net.createServer(function(sock) {
	let answer=Math.floor(Math.random() * 21);
	
	console.log('answer ' + answer);
 console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
 sock.on('data', function(data) {
 

 if(count === 0)
 {
 	name = data
 	sock.write('OK');
 	count++
 	console.log(name + ' is connected ');
 }
 else if(count == 5)
 {
 	sock.write('END');
 	count = 0
 	sock.end()
 	console.log(name + ' is out of luck ');
 }
 else if(data == answer)
 {
 	sock.write('BINGO');
 	sock.end()
 	console.log(name + ' is lucky ');
 	count = 0
 }
 else
 {
 	sock.write('WRONG');
 	count++
 	console.log(name + ' is still trying he thinks it is ' + data + ' but it is ' + answer );
 }
 
 });
 sock.on('close', function(data) {
 console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
 });
}).listen(PORT, HOST);
console.log('Server listening on ' + HOST +':'+ PORT);