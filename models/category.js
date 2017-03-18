'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    categoryId: DataTypes.INTEGER,
    nama_category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Category;
};
