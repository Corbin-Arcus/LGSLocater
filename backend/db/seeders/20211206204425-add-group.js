'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Groups', [
      {
      groupGame: 'Commander/EDH',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        groupGame: 'Warhammer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        groupGame: 'DND',
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
      return queryInterface.bulkDelete('Groups', null, {});
  }
};
