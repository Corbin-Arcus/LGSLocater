'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Stores', [
      {
      storeName: 'MWO Games',
      address: '2516 Volunteer Pkwy A, Bristol, TN 37620',
      createdAt: new Date(),
      updatedAt: new Date()
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Stores', null, {});
  }
};
