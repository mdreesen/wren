// Need to import Model and DataTypes from Sequelize
const { Model, DataTypes } = require('sequelize');
// Need to look at the connection file
const sequelize = require('../config/connection');
// Nee to use bcrypt to crypt password
const bcrypt = require('bcrypt');

// Create the User Model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

// Define table columns and configuration
User.init({
        id: {
            // Use the special Sequelize DataTypes object
            type: DataTypes.INTEGER,

            // Not Null option
            allowNull: false,

            // Instruct that this is primary key
            // The ID should be the primary key for the user
            primaryKey: true,

            // Turn on auto increment
            autoIncrement: true
        },

        username: {
            // What datatype this username is
            type: DataTypes.STRING,

            // Cannot be null
            allowNull: false
        },

        email: {
            // What datatype this email is
            type: DataTypes.STRING,

            // Cannot be null
            allowNull: false,

            // Has to be unique email
            unique: true,

            // Validation for email
            validate: {
                isEmail: true
            }
        },

        password: {
            // What datatype this password is
            type: DataTypes.STRING,

            // password cannot be null
            allowNull: false,

            validate: {
                // This means the password must be at least 4 characters long
                len: [4]
            }
        }
    },

    {
        hooks: {
            // set up beforeCreate lifeCycle "hook" functionality
            // This is for Create User functionality
            // gave saltRounds of 10
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            // This is for Update User functionality
            // Gave saltRounds of 10
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // Pass imported Sequelize connection
        sequelize,

        // Automatically create createdAt/updatedAt timestamp fields
        timestamps: true,

        // Don't pluralize name of database table
        freezeTableName: true,

        // Use underscores instead of camel-casing
        underscored: true,

        // Make it so model name stays lowercase
        modelName: 'user'
    });

module.exports = User;