const { ApolloServer, gql } = require('apollo-server-express');
const User = require('./models/User');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!): User
    }
`;

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        }
    },
    
    Mutation: {
        addUser: async (_, { username, email }) => {
            const user = new User({ username, email });
            return await user.save();
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;