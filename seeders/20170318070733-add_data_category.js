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
      'Categories',
      [{
        categoryId: 1001,
        nama_category: "alat tulis",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryId: 1002,
        nama_category: "alat tulis",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        categoryId: 1003,
        nama_category: "alat tulis",
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
      'Categories',
      null,
      {}
    )
  }
};
