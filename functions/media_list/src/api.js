'use strict'

const { objectId } = require('./utils/helpful')

const database = require('./utils/database')
const mediaController = require('./controllers/MediaController')
const userController = require('./controllers/UserController')


const createMedia = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false

    const isConnected = await database.connect()

    if (! isConnected) {
        return {
            statusCode: 500,
            body: { message : 'database_not_connected' }
        }
    }

    const body = event.body ?? {}

    try {
        const data = JSON.parse(body)

        const media = await mediaController.createMedia(data)

        return {
            statusCode: 201,
            body: media
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: {
                message : 'execution_failed',
                errors : error?.errors ?? error
            }
        }
    }

}


const getMedias = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false

    const isConnected = await database.connect()

    if (! isConnected) {
        return {
            statusCode: 500,
            body: { message : 'database_not_connected' }
        }
    }

    try {
        const medias = await mediaController.getMedias()

        if (! medias) {
            return {
                statusCode: 404,
                body: { message : 'medias_not_found' }
            }
        }

        return {
            statusCode: 200,
            body: medias
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: {
                message : 'execution_failed',
                errors : error?.errors ?? error
            }
        }
    }
}


const createUser = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false

    const isConnected = await database.connect()

    if (! isConnected) {
        return {
            statusCode: 500,
            body: { message : 'database_not_connected' }
        }
    }

    const body = event.body ?? {}

    try {
        const data = JSON.parse(body)

        const user = await userController.createUser(data)

        if (! user.length) {
            return {
                statusCode: 404,
                body: { message : 'places_not_found' }
            }
        }

        return {
            statusCode: 200,
            body: user
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: {
                message : 'execution_failed',
                errors : error?.errors ?? error
            }
        }
    }
}

module.exports = {
  createMedia,
  getMedias,
  createUser
}