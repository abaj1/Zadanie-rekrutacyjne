import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import renderer from "react-test-renderer";

describe("Spinner", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  it("Should render Spinner when state is undefined ", () => {
    const spinner = renderer.create(<Spinner></Spinner>).toJSON();

    expect(spinner).toMatchSnapshot();
  });
});
