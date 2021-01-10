import {Button, FormControl, FormHelperText, Grid, TextField} from '@material-ui/core'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {State} from '../../types'
import * as actions from '../../actions'

export const NameInput = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const newWidget = useSelector((state: State) => state.newWidget)
  const name = useSelector((state: State) => state.newWidget.name)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!newWidget.language) {
      history.push('/')
    }
  })
  const onChange = (event: any) => dispatch(actions.setNewWidgetName(event.target.value))

  const validate = (): boolean => {
    if (!name?.length) {
      setError(true)
      setErrorMessage('Cannot be empty')

      return false
    }

    return true
  }

  const onCreate = () => {
    if (validate()) {
      newWidget.id = new Date().getTime() // surely this could have been handled better :D

      dispatch(actions.addWidget([newWidget]))
      dispatch(actions.setShouldUpdateStorage(true))

      history.push('/')
    }
  }
  return (
    <Grid container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
    >
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth error={error}>
          <TextField
            id="name-text-input"
            label="Widget Name"
            variant="outlined"
            onChange={onChange}
            error={error}
          />
          <FormHelperText id="error-message" hidden={!error}>{errorMessage}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          id="create-btn"
          variant="contained"
          color="primary"
          onClick={onCreate}
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </Grid>
  )
}