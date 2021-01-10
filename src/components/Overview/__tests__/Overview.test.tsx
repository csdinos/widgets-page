import React from 'react'
import {initialState, render} from '../../../test-utils'
import {Overview} from '../Overview'
import {State} from '../../../types'

const state: State = {
  ...initialState,
  widgets: [{
    name: 'Doge',
    language: 'Meme',
    id: 1994
  }],
  hasLoaded: true
}

describe('<Overview />', () => {
  it('When we have an empty initial state, it should display an empty overview page', async () => {
    const {asFragment} = render(<Overview/>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('When we have a state with 1 widget, it should display an empty overview page', async () => {
    const {asFragment} = render(<Overview/>, {initialState: state})
    expect(asFragment()).toMatchSnapshot()
  })
})