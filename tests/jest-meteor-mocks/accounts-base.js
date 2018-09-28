/* eslint-env jest */

const Accounts = {
  createUser: jest.fn(),
  validateNewUser: jest.fn(),
};

module.exports = { Accounts };
