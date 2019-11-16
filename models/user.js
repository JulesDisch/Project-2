module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        item1: {type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        item2: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "1"
          }
    });
    return User;
}