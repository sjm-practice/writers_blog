/* eslint-env jest */

const Mongo = {
  Collection: jest.fn().mockImplementation(() => ({
    allow: jest.fn(),
    deny: jest.fn(),
    attachSchema: jest.fn(), // function I believe is actually part of aldeed:collection2
  })),
};

module.exports = { Mongo };
