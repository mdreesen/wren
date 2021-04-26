const { User, Birthworker } = require('../models');
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

        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
              return userData;
            }
            throw new AuthenticationError('Not logged in');
          },
          // -=- User Resolvers -=- //
          users: async () => {
            return User.find()
              .select('-__v -password')
          },

          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
          },

          // -=- Birthworker Resolvers -=- //
          Birthworkers: async () => {
            return Birthworker.find()
              .select('-__v -password')
          }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
          },

          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
          },
    }
};

module.exports = resolvers;