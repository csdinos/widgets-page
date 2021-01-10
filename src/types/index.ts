export type Widget = {
  id: number;
  name: string;
  language: string;
}
export type State = {
  widgets: Array<Widget>
  newWidget: Widget
  deleteModalId: number | null,
  hasLoaded: boolean,
  shouldUpdateStorage: boolean
}