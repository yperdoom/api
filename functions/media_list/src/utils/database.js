'use strict'

const mongoose = require('mongoose')

const MONGO_ENDPOINT = 'mongodb+srv://yperdoom:n9rReT2A5jeIQWpq@cluster0.vufsg.mongodb.net/?retryWrites=true&w=majority'

let conn = null

const connect = async () =>  {

    if (conn == null) {
        try {
            conn = await mongoose.connect(MONGO_ENDPOINT)
        } catch (error) {
            console.log(error)

            conn = null
        }
    }

    return conn
}

module.exports = { connect }