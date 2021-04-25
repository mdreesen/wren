const { User } = require('../models');
const { AuthenticationError }  = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// NOTES
// resolvers is an object with a query nested inside that holds a series of methods
// these methods get the same name of the query or mutation they are resolvers

const resolvers = {
    Query: {
        // Test Query for "Hello World"
        helloWorld: () => {
            return 'Hello World';
        },
        me: async (parent, args) => {
            const userData = await User.findOne({})
                .select('-__v -password')
            return userData
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
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return user;
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;