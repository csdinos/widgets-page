import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers'

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export const initialState = {
  widgets: [],
  newWidget: {
    id: -1,
    name: '',
    language: '',
  },
  deleteModalId: null,
  hasLoaded: false,
  shouldUpdateStorage: false
}

export * from '@testing-library/react'
export {render}