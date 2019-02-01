var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var i = 1
var count = 0
var client = new net.Socket();
client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('test1');


});
client.on('data', function(data) {
 console.log('DATA: ' + data);
 //client.destroy();
 
 

 
 
 if(data.toString().trim() === 'BINGO' || data.toString().trim() === 'END')
 	client.destroy();
 else
 	client.write(""+i); 	
	i++;
 
 
});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});

