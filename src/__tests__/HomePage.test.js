import { shallow } from "enzyme";
import React from "react";
import HomePage from "../containers/HomePage";

const findByTag = (wrapper, val) => {
  return wrapper.find(val);
};

describe("<HomePage/>", () => {
  const wrapper = shallow(<HomePage />);

  it("should call 1 <Segment/>", () => {
    const segmentComponent = findByTag(wrapper, "Segment");
    expect(segmentComponent.length).toBe(1);
  });

  it("should call 1 <Container/>", function () {});
});
