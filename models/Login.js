// Creates table LOGIN in database

module.exports = (sequelize, DataTypes) => {

    const Login = sequelize.define("Login", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Login;
};