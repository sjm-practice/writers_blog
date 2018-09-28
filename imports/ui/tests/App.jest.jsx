/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("<App />", function() {
  it("matches render snapshot", function() {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
