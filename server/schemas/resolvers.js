// NOTES
// resolvers is an object with a query nested inside that holds a series of methods
// these methods get the same name of the query or mutation they are resolvers

const resolvers = {
    Query: {
        // Test Query for "Hello World"
        helloWorld: () => {
            return 'Hello World';
        },
        // Get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        // Get one user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
        }
    },

    Mutation: {
        addUser: async () => {

        },
        login: async () => {

        }
    }
};

module.exports = resolvers;