const http = require('http') // use http
const app = require('./app') // require ./app
const port = 80 // create port name
const server = http.createServer(app) // create server
const io = require('socket.io')(server) // create socketio server
const message = require('./plugins/socketio/message')(io) // message socketio
const home = require('./plugins/socketio/home')(io)

server.listen(port) // listen port 1307
