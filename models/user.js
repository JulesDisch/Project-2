module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        name: {type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        item: {
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