import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import Nav from "../containers/Routes";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTag = (wrapper, val) => {
  return wrapper.find(val);
};

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("<App />", () => {
  const wrapper = setup();

  it("should in <App /> components to be one div", function () {
    const divTag = findByTag(wrapper, "div");
    expect(divTag.length).toBe(1);
  });

  it("should call app-component at least once", function () {
    const appComponent = findByAttr(wrapper, "app-component");
    expect(appComponent.length).toEqual(1);
  });

  it("should call browser-router at least once", function () {
    const appComponent = findByAttr(wrapper, "browser-router");
    expect(appComponent.length).toEqual(1);
  });

  it("should call nav-component at least once", function () {
    const appComponent = findByAttr(wrapper, "nav-component");
    expect(appComponent.length).toEqual(1);
  });
});
