import React from "react";
import { render, initialState } from "../../../test-utils";
import {NameInput} from "../NameInput";
import {State} from '../../../types'

const state: State = {
  ...initialState,
  newWidget: {
    language: 'Greek',
    name: 'Doge',
    id: -1
  }
}
describe("<NameInput />", () => {
  test("should display an empty name input with a create button", async () => {
    const { asFragment } = render(<NameInput />, {initialState: state});
    expect(asFragment()).toMatchSnapshot()
  });
});