const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5005

const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('conection', (socket) => {
console.log('we have a new conexion!!!!')

socket.on('disconnect', ()=>{
    console.log('user have left!!')
})
})

app.use(router)

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))