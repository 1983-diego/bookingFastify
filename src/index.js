const app = require("./app")

const PORT = 3000

const start = () => {
    try {
        app.listen({port: PORT})
        app.log.info(`Server running on ${PORT}`)
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()