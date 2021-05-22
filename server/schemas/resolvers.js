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
          birthworkers: async () => {
            return Birthworker.find()
              .select('-__v -password')
          },
    },

    Mutation: {
        // -=- User Mutations -=-
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
          },

          userLogin: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect Credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
          },

          // -=- Association -=- //
          associateWorker: async (parent, { awwId }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { associateWithWorker: awwId } },
                { new: true }
              ).populate('associateWithWorker')
          
              return updatedUser
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          associateUser: async (parent, { awuId }, context) => {
            if (context.birthworker) {
              const updatedUser = await Birthworker.findOneAndUpdate(
                { _id: context.birthworker._id },
                { $addToSet: { associateWithUser: awuId } },
                { new: true }
              ).populate('associateWithUser')
          
              return updatedUser
            }
          
            throw new AuthenticationError('You need to be logged in!');
          },

          // -=- BirthWorker Mutations -=-
          addBirthworker: async (parent, args) => {
            const birthworkers = await Birthworker.create(args);
            const token = signToken(birthworkers);
            return { token, birthworkers };
          },

          loginBirthworker: async (parent, { email, password }) => {
            const birthworker = await Birthworker.findOne({ email });
            if (!birthworker) {
              throw new AuthenticationError('Incorrect Credentials');
            }
            const correctPw = await birthworker.isCorrectPassword(password);
            if(!correctPw){
              throw new AuthenticationError('Incorrect Credentials');
            }
            const token = signToken(birthworker);
            return { token, birthworker };
          },
    }
};

module.exports = resolvers;