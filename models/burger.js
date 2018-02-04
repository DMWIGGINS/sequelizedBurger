module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255],
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    });
    console.log("about to exit models");
    return Burger;
};