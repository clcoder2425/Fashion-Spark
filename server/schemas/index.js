const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
module.exports = { typeDefs, resolvers };
// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!'
  }
};

// Create an instance of ApolloServer with your schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Create an Express app and apply the ApolloServer middleware
const app = express();
server.applyMiddleware({ app });

// Start the server on port 4000
app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});