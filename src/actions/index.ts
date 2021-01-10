import {createActions} from 'redux-actions'
import {Widget} from '../types'

export const {
  setHasLoaded,
  addWidget,
  removeWidget,
  setNewWidgetName,
  setNewWidgetLanguage,
  setIdForDeleteModal,
  setShouldUpdateStorage
} = createActions({
  SET_HAS_LOADED: (hasLoaded: boolean) => ({hasLoaded}),
  ADD_WIDGET: (widgets: Array<Widget>) => ({widgets}),
  REMOVE_WIDGET: (id: number) => ({id}),
  SET_NEW_WIDGET_NAME: (name: string) => ({name}),
  SET_NEW_WIDGET_LANGUAGE: (language: string) => ({language}),
  SET_ID_FOR_DELETE_MODAL: (id: number) => ({id}),
  SET_SHOULD_UPDATE_STORAGE: (shouldUpdateStorage: boolean) => ({shouldUpdateStorage}),
})