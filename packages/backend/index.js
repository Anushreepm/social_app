const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
// const dotEnv = require('dotenv')

const { MONGODB } = require('./config.js')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

// dotEnv.config()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
})

mongoose
    .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongodb connected')
        return server.listen({ port: 5000 })
    })
    .then((res) => {
        console.log(`🚀 server running at ${res.url}`)
    })
