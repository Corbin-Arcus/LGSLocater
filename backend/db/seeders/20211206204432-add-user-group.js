'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('UserGroups', [
    {
     name: 'Corbin Arcus',
     userId: 1,
     groupId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      name: 'Josephine Corcelle',
      userId: 2,
      groupId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Chris Arcus',
      userId: 3,
      groupId: 3,
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
      return queryInterface.bulkDelete('UserGroups', null, {});
  }
};
