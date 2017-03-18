'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Products',
      [{
        productId: 401,
        nama_product: "pensil",
        harga: "3000",
        quantity: 10,
        categoryId: 1001,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        productId: 402,
        nama_product: "buku",
        harga: "4000",
        quantity: 20,
        categoryId: 1001,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        productId: 403,
        nama_product: "penghapus",
        harga: "1000",
        quantity: 30,
        categoryId: 1001,
        createdAt: new Date(),
        updatedAt: new Date()
      }]
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete(
      'Products',
      null,
      {}
    )
  }
};
