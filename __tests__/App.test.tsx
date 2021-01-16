import React from "react";
import { create } from "react-test-renderer";
import { App } from "../src/components/App";

describe("ButtonComponent", () => {
  it("renderes correctly", () => {
    const root = create(<App />);
    expect(root.toJSON()).toMatchSnapshot();
  });
});
