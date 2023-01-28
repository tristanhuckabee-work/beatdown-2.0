'use strict';
const bcrypt = require('bcryptjs');


// ---------------------------------------------------------------
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'yung-demo@user.io', username: 'yung-demo', hashedPass: bcrypt.hashSync('demoPassword'),
        biography: 'This is the demo account. If you choose not to make an account this is you.',
      },
      {
        email: 'tristan@user.io', username: 'tristan-huckabee', hashedPass: bcrypt.hashSync('demoPassword'),
        biography: 'I am the creator of the application!',
      },
      {
        email: 'citypopphantom@user.io', username: 'cityPopPhantom', hashedPass: bcrypt.hashSync('demoPassword'),
        biography: `This is the best username I've ever made so it's going to be everywhere!!!`,
      },
      {
        email: 'rockmusic@user.io', username: 'bigMetal', hashedPass: bcrypt.hashSync('demoPassword'),
        biography: 'No Biography Found',
      },
      {
        email: 'blank@user.io', username: 'blank_user', hashedPass: bcrypt.hashSync('demoPassword'),
        biography: 'No Biography Found',
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    
  }
};
