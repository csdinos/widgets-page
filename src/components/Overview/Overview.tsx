import {Container, Button, Grid, Typography} from '@material-ui/core'
import {DeleteModal, WidgetListing} from '../'
import {useHistory} from 'react-router-dom'

export const Overview = () => {
  const history = useHistory()

  return (
    <Container maxWidth="xl">
      <Grid container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={2}
      >
        <Grid item xs={8}>
          <Typography variant="h3" gutterBottom>
            Available widgets
          </Typography>
        </Grid>
        <WidgetListing />
        <Grid item xs={12} id="new-widget-btn">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => history.push('/create/language')}
          >New</Button>
        </Grid>
      </Grid>
      <DeleteModal />
    </Container>
  )
}