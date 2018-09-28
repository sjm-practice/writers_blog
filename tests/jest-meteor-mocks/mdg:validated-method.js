/* eslint-env jest */
/* eslint-disable import/prefer-default-export */

// TODO - figure out why this mock implementation doesn't seem to be getting returned
export const ValidatedMethod = jest.fn().mockImplementation(() => ({
  call: jest.fn(),
}));
