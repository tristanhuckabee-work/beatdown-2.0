'use strict';
const bcrypt = require('bcryptjs');


// ---------------------------------------------------------------
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'yung-demo@user.io',
        username: 'yung-demo',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: 'This is the demo account. If you choose not to make an account this is you.',
        image: ''
      },
      {
        email: 'tristan@user.io',
        username: 'tristan-huckabee',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: 'I am the creator of the application!',
        image: ''
      },
      {
        email: 'citypopphantom@user.io',
        username: 'cityPopPhantom',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: `This is the best username I've ever made so it's going to be everywhere!!!`,
        image: ''
      },
      {
        email: '',
        username: '',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: '',
        image: ''
      },
      {
        email: '',
        username: '',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: '',
        image: ''
      },
      {
        email: '',
        username: '',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: '',
        image: ''
      },
      {
        email: '',
        username: '',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: '',
        image: ''
      },
      {
        email: '',
        username: '',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: '',
        image: ''
      },
      {
        email: '',
        username: '',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: '',
        image: ''
      },
      {
        email: '',
        username: '',
        hashedPass: bcrypt.hashSync('demoPassword'),
        biography: '',
        image: ''
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    
  }
};
