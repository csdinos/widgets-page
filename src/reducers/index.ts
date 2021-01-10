import {State} from '../types'
import {handleActions, Action} from 'redux-actions'

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
      ...state,
      hasLoaded: action.payload.hasLoaded,
    }),
    ADD_WIDGET: (state: State, action: Action<any>) => ({
      ...state,
      widgets: [...(state.widgets ? (state.widgets.concat(action.payload.widgets)) : [])],
      newWidget: emptyWidget,
    }),
    REMOVE_WIDGET: (state: State, action: Action<any>) => ({
      ...state,
      widgets: state.widgets ? [...state.widgets.filter(w => w.id !== action.payload.id)] : [],
    }),
    SET_NEW_WIDGET_NAME: (state: State, action: Action<any>) => ({
      ...state,
      newWidget: {
        language: state.newWidget?.language || '',
        id: state.newWidget?.id || -1,
        name: action.payload.name
      }
    }),
    SET_NEW_WIDGET_LANGUAGE: (state: State, action: Action<any>) => ({
      ...state,
      newWidget: {
        name: state.newWidget?.name || '',
        id: state.newWidget?.id || -1,
        language: action.payload.language
      }
    }),
    SET_ID_FOR_DELETE_MODAL: (state: State, action: Action<any>) => ({
      ...state,
      deleteModalId: action.payload.id,
    }),
    SET_SHOULD_UPDATE_STORAGE: (state: State, action: Action<any>) => ({
      ...state,
      shouldUpdateStorage: action.payload.shouldUpdateStorage
    }),
  },
  defaultState
)