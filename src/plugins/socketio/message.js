module.exports = (io) => {
    io.on('connection', (socket) => {
        // send message
        socket.on(`message`, (data) => {
            socket.broadcast.emit('message', data) // broadcast exept sender
        })

        // update message
        socket.on('update-message', () => {
            io.emit('update-message')
        })

        // create order first message
        socket.on(`create-order`, () => {
            io.emit(`create-order`)
        })

        // update quotatiom message + pending
        socket.on(`update-quotation`, () => {
            io.emit(`update-quotation`)
        })

    })
}
