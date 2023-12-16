'use strict'

const mongoose = require('mongoose')

const isObjectId = (s) => {
    return mongoose.Types.ObjectId.isValid(s) && /^[0-9a-fA-F]{24}$/.test(s)
}

const objectId = (s) => {
    if (isObjectId(s)) {
        return mongoose.Types.ObjectId(String(s))
    }
}

module.exports = {
    objectId
}