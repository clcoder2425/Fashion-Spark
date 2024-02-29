const typeDefs = `
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

module.exports = typeDefs;