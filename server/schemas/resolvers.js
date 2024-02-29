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

module.exports = resolvers;