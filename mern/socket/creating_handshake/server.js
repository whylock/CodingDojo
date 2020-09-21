
const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`Listening on port ${port}`)),
    io = require('socket.io')(server)

io.on('connection', (socket) => {
    socket.on('register', handleRegister)
    socket.on('join',handleJoin)
    socket.on('leave',handleLeave)
    socket.on('message',handleMessage)
    socket.on('chat',handleGetChat)
    socket.on('users', handleGetUsers)
    socket.on('disconnect', () => {
        console.log(`User Disconnected, ${socket.id}`, socket.id)
        handleDisconnect()
    })
    socket.on('error', () => {
        console.log('Error from client', socket.id)
        console.log(err)
    })
})



app.use(cors());
app.use(express.json())


require("./server/config/config.database")
require('./server/routes/holder.routes')(app)

