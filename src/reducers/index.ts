import {handleActions} from 'redux-actions'
import {State} from '../types'
import {Action} from 'redux-actions'

// A bit of a cheap approach but here we are :D
const emptyWidget = {
  id: -1,
  name: '',
  language: '',
}

const defaultState: State = {
  widgets: [],
  newWidget: emptyWidget,
  deleteModalId: null,
  hasLoaded: false,
  shouldUpdateStorage: false
}

export const reducer = handleActions(
  {
    SET_HAS_LOADED: (state: State, action: Action<any>) => ({
      widgets: state.widgets,
      newWidget: state.newWidget,
      deleteModalId: state.deleteModalId,
      hasLoaded: action.payload.hasLoaded,
      shouldUpdateStorage: state.shouldUpdateStorage
    }),
    ADD: (state: State, action: Action<any>) => ({
      widgets: [...state.widgets.concat(action.payload.widgets)],
      newWidget: emptyWidget,
      deleteModalId: state.deleteModalId,
      hasLoaded: state.hasLoaded,
      shouldUpdateStorage: state.shouldUpdateStorage
    }),
    REMOVE: (state: State, action: Action<any>) => ({
      widgets: [...state.widgets.filter(w => w.id != action.payload.id)],
      newWidget: state.newWidget,
      deleteModalId: state.deleteModalId,
      hasLoaded: state.hasLoaded,
      shouldUpdateStorage: state.shouldUpdateStorage
    }),
    SET_NEW_WIDGET_NAME: (state: State, action: Action<any>) => ({
      widgets: state.widgets,
      newWidget: {
        ...state.newWidget,
        name: action.payload.name
      },
      deleteModalId: state.deleteModalId,
      hasLoaded: state.hasLoaded,
      shouldUpdateStorage: state.shouldUpdateStorage
    }),
    SET_NEW_WIDGET_LANGUAGE: (state: State, action: Action<any>) => ({
      widgets: state.widgets,
      newWidget: {
        ...state.newWidget,
        language: action.payload.language
      },
      deleteModalId: state.deleteModalId,
      hasLoaded: state.hasLoaded,
      shouldUpdateStorage: state.shouldUpdateStorage
    }),
    SET_ID_FOR_DELETE_MODAL: (state: State, action: Action<any>) => ({
      widgets: state.widgets,
      newWidget: state.newWidget,
      deleteModalId: action.payload.id,
      hasLoaded: state.hasLoaded,
      shouldUpdateStorage: state.shouldUpdateStorage
    }),
    SET_SHOULD_UPDATE_STORAGE: (state: State, action: Action<any>) => ({
      widgets: state.widgets,
      newWidget: state.newWidget,
      deleteModalId: action.payload.id,
      hasLoaded: state.hasLoaded,
      shouldUpdateStorage: action.payload.shouldUpdateStorage
    }),
  },
  defaultState
)