const { User, Birthworker, Feeling } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
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

    // Logged in user information
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('associateWithWorker')
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    // -=- User Resolvers -=- //
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('associateWithWorker')
    },

    // Getting user by email
    user: async (parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
        .populate('associateWithWorker')
    },

    feelings: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Feeling.find(params).sort({ createdAt: -1 });
    },
    feeling: async (parent, { email }) => {
      return Feeling.findOne({ email });
    },

    // -=- Birthworker Resolvers -=- //
    // Logged in birthworker information
    viewBirthworker: async (parent, args, context) => {
      if (context.birthworker) {
        const birthworkerData = await Birthworker.findOne({ _id: context.birthworker._id })
          .select('-__v -password')
        return birthworkerData;
      }
      throw new AuthenticationError('Not logged in');
    },
    // Logged in user information
    worker: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.birthworker._id })
          .select('-__v -password')
          .populate('associateWithUser')
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    // Getting birthworker by email
    birthworker: async (parent, { email }) => {
      return Birthworker.findOne({ email })
        .select('-__v -password')
        .populate('associateWithUser')
    },

    birthworkers: async () => {
      return Birthworker.find()
        .select('-__v -password')
        .populate('associateWithUser')
    },
  },

  Mutation: {
    // -=- User Mutations -=-
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    addAboutUser: async (parent, args) => {
      if (context.user) {
        const User = await User.create({ ...args, email: context.user.email });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { new: true }
        );
        return User;
      }
      throw new AuthenticationError('You need to be logged in!');
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

    addFeeling: async (parent, args, context) => {
      if (context.user) {
        const feeling = await Feeling.create({ ...args, email: context.user.email });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { feelings: feeling._id } },
          { new: true }
        );
        return feeling;
      }
      throw new AuthenticationError('You need to be logged in!');
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
      const birthworker = await Birthworker.create(args);
      const token = signToken(birthworker);
      return { token, birthworker };
    },

    workerLogin: async (parent, { email, password }) => {
      const birthworker = await Birthworker.findOne({ email });
      if (!birthworker) {
        throw new AuthenticationError('Incorrect Credentials');
      }
      const correctPw = await birthworker.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect Credentials');
      }
      const token = signToken(birthworker);
      return { token, birthworker };
    },
  }
};

module.exports = resolvers;