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
    });


    return SignUps;
};