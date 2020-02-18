import React from "react";
import renderer from "react-test-renderer";
import Counter from "../../../src/components/counter/counter";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Counter />", () => {
  it("is alive at application start", () => {
    let app = shallow(<Counter />);
    expect(app.find("span").exists()).toBeTruthy();
  });

  it("changes state to negative on a click", () => {
    let app = mount(<Counter />);
    let span = app.find(".down");
    span.simulate("click");

    expect(app.state("count")).toBe(-1);
  });

  it("changes state to positive on a click", () => {
    let app = mount(<Counter />);
    let span = app.find(".up");
    span.simulate("click");

    expect(app.state("count")).toBe(1);
  });

});