import React from "react";
import { render, initialState } from "../../../test-utils";
import {WidgetListing} from "../WidgetListing";
import {State} from '../../../types'

const state: State = {
  ...initialState,
  widgets: [{
    name: 'Doge',
    language: 'Meme',
    id: 1994
  }],
}

describe("<WidgetListing />", () => {
  it("When we have initial empty state, it should display a an empty widget list", async () => {
    const { asFragment } = render(<WidgetListing />);
    expect(asFragment()).toMatchSnapshot()
  });

  it("When we have a filled state with one widget, it should display a widget list with one element", async () => {
    const { asFragment } = render(<WidgetListing />, {initialState: state});
    expect(asFragment()).toMatchSnapshot()
  });
});