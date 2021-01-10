import React from "react";
import { render } from "../../../test-utils";
import {NameInput} from "../NameInput";

describe("<NameInput />", () => {
  test("should display an empty name input with a create button", async () => {
    const { asFragment } = render(<NameInput />);
    expect(asFragment()).toMatchSnapshot()
  });
});