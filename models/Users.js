// Creates table USERS in database

module.exports = (sequelize, DataTypes) => {
    
    const UserInfo = sequelize.define("UserInfo", {

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
        first: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pronouns: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lessons: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        

    });

    return UserInfo;
};