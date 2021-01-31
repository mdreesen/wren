const User = require('./User');
const Post = require('./Post');

// create associations
// Post does not belong to many users, this should only be with one user
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// Post belongs to the user
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post };