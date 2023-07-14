// Creates table CONTACTS in database
// Based off of given code in production folder (just to practice connecting)

const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {

    const Contacts = sequelize.define("Contacts", {

        first: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    });

    return Contacts;
};