'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
        isUnique: function(val, next){
          Product.find(
            {where: {productId: val}}
          ).then((exist) => {
            if (exist) {
              return next("Product Id sudah ada");
            }else {
              next();
            }
          })
        }
      }
    },
    nama_product: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    harga: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    quantity: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};
