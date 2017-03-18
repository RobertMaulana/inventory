'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    // categoryId: {
    //   type: DataTypes.INTEGER,
    //   // primaryKey: true
    // },
    nama_category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Category.hasMany(models.Product)
        // Category.belongsTo(models.Product,{foreignKey: 'categoryId'})
      }
    }
  });
  return Category;
};
