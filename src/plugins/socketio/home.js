module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('acceptWork', (id) => {
            io.emit('acceptWork', id)
        })

        socket.on('postPortfolio', (data) => {
            io.emit('postPortfolio', data)
        })

        socket.on('updatePortfolio', (id) => {
            io.emit('updatePortfolio', id)
        })

        socket.on('deletePortfolio', (id) => {
            io.emit('deletePortfolio', id)
        })

    })
}
