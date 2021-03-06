const fastify = require('fastify')({
    logger: true
})

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.listen(3006, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})