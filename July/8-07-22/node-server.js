// 1. Import library http.
const http = require("http"); // module/library.

// What is https. (secure version of http)
// 2. Create Server.

http.createServer((req, res)=>{
    // We are ending reponse and returning it to client.
    console.log("Hello world 2");
    res.end("Welcome to NodeJS Server");
}).listen(4100);

// Client=> Server
// CLient(req) => Server. Server => Sends Reponse.




// localhost:4000

// WHat is a server, type of server => 
// WebApplicationServer.
    // Web Server => WebClients [HTTP]
    // need to send url, port, req mthod, body., headers.


