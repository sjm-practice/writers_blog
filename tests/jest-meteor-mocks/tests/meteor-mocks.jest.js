/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions, import/imports-first */
/* eslint-disable import/no-extraneous-dependencies, import/extensions */

import { ValidatedMethod } from "meteor/mdg:validated-method";

describe("Jest Meteor Mocks", function() {
  describe("MDG ValidatedMethod", function() {
    it("returns mock implementation with a .call mock", function() {
      const testValidatedMethod = new ValidatedMethod({
        name: "insert",
      });

      testValidatedMethod.call(4, 5, 6);

      expect(testValidatedMethod.call).toHaveBeenCalledTimes(1);
      expect(testValidatedMethod.call).toHaveBeenCalledWith(4, 5, 6);
    });
  });
});
