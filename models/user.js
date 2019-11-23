module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        name: {type: DataTypes.STRING,
            // allowNull: false,
            validate: {
              len: [1]
            }
        },
        item: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
              len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "1"
          },
          complete: {
            type: DataTypes.BOOLEAN,
            // defaultValue is a flag that defaults a new todos complete value to false if
            // it isn't supplied one
            defaultValue: false
          }
    });
    return User;
}