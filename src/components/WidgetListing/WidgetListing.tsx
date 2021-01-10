import {Button, Grid, Typography, Card, CardContent, CardActions} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {State} from '../../types'
import * as actions from '../../actions'
import {useEffect} from 'react'

export const WidgetListing = () => {
  const widgets = useSelector((state: State) => state.widgets)
  const hasLoaded = useSelector((state: State) => state.hasLoaded)
  const shouldUpdateStorage = useSelector((state: State) => state.shouldUpdateStorage)
  const dispatch = useDispatch()

  const loadWidgetsFromLocalStorage = () => {
    const widgets = localStorage.getItem('widgets');

    if (widgets) {
      dispatch(actions.add(JSON.parse(widgets)))
    }
  }

  const updateLocalStorage = () => {
    localStorage.setItem('widgets', JSON.stringify(widgets))
  }

  useEffect(() => {
    if (!hasLoaded) {
      loadWidgetsFromLocalStorage()

      dispatch(actions.setHasLoaded(true))
    }
  },[])

  useEffect(() => {
    if (shouldUpdateStorage) {
      updateLocalStorage()
      dispatch(actions.setShouldUpdateStorage(false))
    }
  },[shouldUpdateStorage])

  return (
    <>
      {
        widgets.map((w, i) => (
          <Grid item xs={6} key={i}>
            <Card variant="outlined" className="widget-card">
              <CardContent>
                <Typography variant="body1" gutterBottom>Name: {w.name}</Typography>
                <Typography variant="body1" gutterBottom>Language: {w.language}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="delete-btn"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    dispatch(actions.setIdForDeleteModal(w.id))
                  }}
                >Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </>
  )
}