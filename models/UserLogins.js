// Creates table SignUp in database

module.exports = (sequelize, DataTypes) => {

    const UserLogins = sequelize.define("UserLogins", {

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    UserLogins.associate = (models) => {
        UserLogins.belongsTo(models.SignUps)
    }


    return UserLogins;
};