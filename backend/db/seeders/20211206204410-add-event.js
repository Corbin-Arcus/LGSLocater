'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Events', [
       {
         storeId: 1,
         name: 'Thursday night EDH',
         eventGame: 'Commander/EDH',
         groupId: 1,
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
      return queryInterface.bulkDelete('Events', null, {});
  }
};
