'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Users', [
        {
          email: 'corbinarcus@hotmail.com',
          username: 'Corbin-Arcus',
          hashedPassword: bcrypt.hashSync('Chipperoo')
        },
        {
          email: 'josephinecorcelle@fake.com',
          username: 'jcorcelle',
          hashedPassword: bcrypt.hashSync('lucy119')
        },
        {
          email: 'chrisarcus@yahoo.com',
          username: 'carcus420',
          hashedPassword: bcrypt.hashSync('max112')
        },
        {
          email: 'demo@aa.io',
          username: 'demouser',
          hashedPassword: bcrypt.hashSync('demo')
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: {[Op.in]: ['Demo-lition','FakeUser1','FakeUser2']}
    }, {})
  }
};
