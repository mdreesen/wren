const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create the User's Post model
class Post extends Model {}

// Fields and Columns for Post model
Post.init({
    id: {
        // Use the special Sequelize DataTypes object
        type: DataTypes.INTEGER,

        // Cannot be Null
        allowNull: false,

        // id is the primary key
        primaryKey: true,

        // Increments when the data is made
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    // Trying to conceive
    ttc: {
        type: DataTypes.BOOLEAN,

        allowNull: true,
    },
    pregnant: {
        type: DataTypes.BOOLEAN,

        allowNull: true
    },

    postpartum: {
        type: DataTypes.BOOLEAN,

        allowNull: true
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
});

module.exports = Post;