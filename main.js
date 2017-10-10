const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);



// const request = require('superagent');
//
// // Request authorization
// request.get('https://accounts.spotify.com/authorize')
//         .query({  'client_id': '3257bc393bf04ff9a2e31e8f0a193cc1',
//                   'response_type': 'code',
//                   'redirect_uri': 'http://localhost:8888/callback',
//                 })
//         .end( (err, res) => {
//           msg = err ? console.log('ERROR:', err) : console.log('SUCCESS:', res.data)
//         })
