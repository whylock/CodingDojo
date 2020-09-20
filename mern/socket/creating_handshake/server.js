
const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`Listening on port ${port}`)),
    io = require('socket.io')(server)

io.on('connection', socket => {
    console.log(socket.id)
    console.log("Nice to meet you. (shake hand)")
    socket.emit("Welcome")
})
    


app.use(cors());
app.use(express.json())


require("./server/config/config.database")
require('./server/routes/holder.routes')(app)

