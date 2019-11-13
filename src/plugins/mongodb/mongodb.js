const mongoose = require('mongoose') // require mongoose
const url = 'mongodb://127.0.0.1:27017/deelance'

const connect = async () => {
    try {
        await mongoose.connect(url, { //Connect to mongodb
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('Connected to', url)
    } catch(err) {
        throw new Error(err)
    }
}

module.exports =  connect()

