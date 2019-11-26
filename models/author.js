module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    var Author = sequelize.define("Author", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    Author.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Author.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Author;
  };
=======
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Author.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Author;
};
>>>>>>> e1ac4bcd5b3a37366f5ebb798ac311bb91dc3efd
