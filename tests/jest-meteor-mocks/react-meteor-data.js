/* eslint-env jest */

// WARNING this will return the provided component, but does not add
// the props to that component normally added by the reactiveFunction.
//   This will however help most renders succeed, for snapshots.
//
//   TODO - TBD
//   It may be possible to execute the reactiveFunction, capture the
//   returned object, and spread that in to the component as props,
//   then return that component with new props.
//        akin to <component { ...reactiveFunction() } />
const createContainer = jest
  .fn()
  .mockImplementation((reactiveFunction, component) => component);

module.exports = { createContainer };
