import {Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, FormHelperText} from '@material-ui/core'
import {useState, ChangeEvent} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../actions'
import {State} from '../../types'

export const LanguageDropdown = () => {
  const language = useSelector((state: State) => state.newWidget.language)
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    dispatch(actions.setNewWidgetLanguage(event.target.value))
  }

  const onNext = () => {
    if (!language || !language.length) {
      setError(true)
      setErrorMessage('Cannot be empty')
    } else {
      history.push('/create/name')
    }
  }

  return (
    <Container maxWidth="xl">
      <Grid container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={2}
      >
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth error={error} id="language-selector"
                       data-testid="language-form-control">
            <InputLabel> Language </InputLabel>
            <Select
              fullWidth
              value={language}
              onChange={handleChange}
              label="Language"
              data-testid="language-select"
            >
              <MenuItem className="language-selector-item" value={'Greek'}>Greek</MenuItem>
              <MenuItem className="language-selector-item" value={'German'}>German</MenuItem>
              <MenuItem className="language-selector-item" value={'English'}>English</MenuItem>
              <MenuItem className="language-selector-item" value={'Polish'}>Polish</MenuItem>
            </Select>
            <FormHelperText id="error-message" hidden={!error}>{errorMessage}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            id="next-btn"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onNext}
          >Next</Button>
        </Grid>
      </Grid>
    </Container>
  )
}