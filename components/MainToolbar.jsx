import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const MainToolbar = (props) => {
  const { classes, handleClickOpen } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Memento Mori Universitas
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
          >
            Add
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MainToolbar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    grow: PropTypes.string.isRequired,
  }).isRequired,
  handleClickOpen: PropTypes.func.isRequired,
}

export default MainToolbar
