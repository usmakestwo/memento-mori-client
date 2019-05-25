import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  error: {
    backgroundColor: '#d32f2f',
    borderRadius: 4,
  },
  icon: {
    opacity: 0.9,
    fontSize: 20,
    marginRight: 8,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

function ErrorSnackDialog(props) {
  const { error, message, handleErrorClose } = props
  const classes = useStyles()
  return (
    <Snackbar
      className={classes.error}
      variant="error"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={error}
      autoHideDuration={3000}
    >
      <SnackbarContent
        className={classes.error}
        message={(
          <span className={classes.message}>
            <ErrorIcon className={classes.icon} />
            {message}
          </span>
          )}
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={handleErrorClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  )
}

ErrorSnackDialog.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string.isRequired,
  handleErrorClose: PropTypes.func.isRequired,
}

ErrorSnackDialog.defaultProps = {
  error: false,
}

export default ErrorSnackDialog
