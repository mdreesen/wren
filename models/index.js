const User = require('./User');
const Post = require('./Post');
const Seen = require('./Seen');

// create associations
// Post does not belong to many users, this should only be with one user
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// Post belongs to the user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// -=- THIS WILL BE ASSOCIATED WITH THE ADMIN-=-
// Seen belongs to many posts
Seen.belongsTo(Post, {
    through: Seen,
    as: 'saw_post',
    foreignKey: 'user_id'
});

Seen.belongsToMany(User, {
    through: Seen,
    as: 'saw_post',
    foreignKey: 'post_id'
});

module.exports = { User, Post };