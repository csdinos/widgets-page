import {Button, Modal, Typography} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import {State} from '../../types'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      textAlign: 'center',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
)

export const DeleteModal = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const id = useSelector((state: State) => state.deleteModalId)

  const onClose = () => {
    dispatch(actions.setIdForDeleteModal(null))
  }

  const onConfirmation = () => {
    dispatch(actions.removeWidget(id))
    dispatch(actions.setIdForDeleteModal(null))
    dispatch(actions.setShouldUpdateStorage(true))
  }

  return (
    <Modal
      open={!!id}
      onClose={onClose}
      className={classes.modal}
    >
      <div className={classes.paper}>
        <Typography variant="body1" gutterBottom>Are you sure?</Typography>
        <Button
          id="confirm-delete-btn"
          variant="contained"
          color="secondary"
          onClick={onConfirmation}
        >Delete</Button>
      </div>
    </Modal>
  )
}