// Creates table SignUp in database

module.exports = (sequelize, DataTypes) => {

    const SignUps = sequelize.define("SignUps", {

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirmPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        overallPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        DLLUnlocked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        sqUnlocked:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        treesUnlocked:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        triesUnlocked:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });


    return SignUps;
};