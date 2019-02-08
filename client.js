var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var that = ""
var client = new net.Socket();



client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   client.write('5935512005');
});

client.on('data', function(data) {
   console.log('server said: ' + data);
   that = data

   
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
   console.log('Connection closed');
   client.destroy();
});


let stdin = process.openStdin()
  
      stdin.addListener("data", (value) =>{
      input = value.toString().trim()
     if(that == 'OK' || that == 'WRONG')
     {
      client.write(input)
     }
     else if(that == 'BINGO')
     {
      client.destroy()
     }
   })