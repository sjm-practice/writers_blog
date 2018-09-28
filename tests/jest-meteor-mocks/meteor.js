/* eslint-env jest */

const Meteor = {
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  logout: jest.fn(),
  methods: jest.fn(),
  call: jest.fn(),
  apply: jest.fn(),
  subscribe: jest.fn(),
  publish: jest.fn(),
  isClient: true,
  isServer: false,
  wrapAsync: jest.fn(() => jest.fn(() => {})),
  Error,
  userId: jest.fn(),
  user: jest.fn(),
  settings: {
    public: {
      googleMapsApiKey: "TestAPIKeyValue",
    },
    foursquare: {
      client_id: "TESTFOURSQUARECLIENTID",
      client_secret: "TESTFOURSQUARECLIENTSECRET",
    },
  },
};

module.exports = { Meteor };
