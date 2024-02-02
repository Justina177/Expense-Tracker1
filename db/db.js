const mongoose = require('mongoose');

const db = async () => {
    // try {
    //     mongoose.set('strictQuery', false)
    //     await mongoose.connect(process.env.MONGO_URL)
    //     console.log('Db connected')
    // } catch (error) {
    //     console.log('DB connection Error')
    // }

    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(connect.connection.host)
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = db