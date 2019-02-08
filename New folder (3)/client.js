var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var count = 0
var client = new net.Socket();
var stop = 0


client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   client.write('5935512005');
});

client.on('data', function(data) {
   console.log('server said: ' + data);

	let stdin = process.openStdin()
   if(data == 'OK' || data == 'WRONG')
   {
   	stdin.addListener("data", (value) =>{
	input = value.toString().trim()
	client.write(input);
	
	})	
   }
   else if(data == 'BINGO')
   {
   	
   }

   
   
  


   
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
   console.log('Connection closed');
   client.destroy();
});
