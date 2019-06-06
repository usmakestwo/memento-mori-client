import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import AddIcon from '@material-ui/icons/Add'
import Lock from '@material-ui/icons/Lock'
import LockOpen from '@material-ui/icons/LockOpen'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const MainToolbar = (props) => {
  const {
    root,
    grow,
    handleClickOpen,
    draggable,
    isDraggable,
    actionBtn,
  } = props
  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={grow}>
            Memento Mori Universitas
          </Typography>
          <Button size="large" className={actionBtn}>
            {draggable ? <LockOpen onClick={() => isDraggable(false)} /> : <Lock onClick={() => isDraggable(true)} />}
          </Button>
          <Button size="large" className={actionBtn}>
            <AddIcon onClick={handleClickOpen} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MainToolbar.propTypes = {
  root: PropTypes.string.isRequired,
  grow: PropTypes.string.isRequired,
  actionBtn: PropTypes.string.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  isDraggable: PropTypes.func.isRequired,
  draggable: PropTypes.bool.isRequired,
}

export default MainToolbar
