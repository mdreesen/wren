// serves as the connection between "resolvers.js" and "typeDefs.js"
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers }