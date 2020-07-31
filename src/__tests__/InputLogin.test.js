import InputLogin from "../components/InputLogin";
import { shallow } from "enzyme";
import React from "react";

describe("<InputLogin />", () => {
  const handleChangeSpy = jest.fn();
  const handleKeyPressSpy = jest.fn();
  const wrapper = shallow(
    <InputLogin onTextChange={handleChangeSpy} onKeyPress={handleKeyPressSpy} />
  );
  it("should be 1 TextField element", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  // it("should change handle input", () => {
  //   const event = { target: { value: "aaa" } };
  //   wrapper.find(<TextField />).simulate("change", event);
  //   // wrapper.find(<TextField />).simulate("change", event);
  //   expect(handleChangeSpy).toHaveBeenCalledWith("aaa");
  // });
});
