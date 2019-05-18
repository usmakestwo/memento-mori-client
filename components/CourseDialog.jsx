import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import PropTypes from 'prop-types'

function CourseDialog(props) {
  const {
    open,
    handleClose,
    createCourse,
    handleChange,
  } = props
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="form-dialog-title">Add Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
              What subject would you like to learn next?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            placeholder="Learning..."
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={createCourse} color="primary">
              Create
          </Button>
          <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

CourseDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  createCourse: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

CourseDialog.defaultProps = {
  open: false,
}


export default CourseDialog
