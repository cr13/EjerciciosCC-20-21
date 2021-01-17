const fastify = require('fastify')({
    logger: true
})

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        querystring: {
            name: { type: 'string' },
            excitement: { type: 'integer' }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    handler: function (request, reply) {
        reply.send({ hello: 'world' })
    }
})

fastify.listen(3006, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})