import React from "react";
import {initialState, render} from '../../../test-utils'
import {DeleteModal} from "../DeleteModal";
import {State} from '../../../types'

const state: State = {
  ...initialState,
  widgets: [{
    name: 'Doge',
    language: 'Meme',
    id: 1994
  }],
  hasLoaded: true,
  deleteModalId: 1994
}

describe("<DeleteModal />", () => {
  test("should display the DeleteModal", async () => {
    const { asFragment } = render(<DeleteModal />, {initialState: state});
    expect(asFragment()).toMatchSnapshot()
  });
});