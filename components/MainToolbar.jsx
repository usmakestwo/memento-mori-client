import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const MainToolbar = (props) => {
  const { root, grow, handleClickOpen } = props
  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={grow}>
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
  root: PropTypes.string.isRequired,
  grow: PropTypes.string.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
}

export default MainToolbar
