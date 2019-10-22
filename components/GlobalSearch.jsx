import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}))

const GlobalSearch = (props) => {
  const { query, handleChangeEvent } = props
  const classes = useStyles()
  return (
    <TextField
      id="global-search"
      label="Search..."
      margin="dense"
      fullWidth
      variant="outlined"
      className={classes.textField}
      value={query}
      onChange={handleChangeEvent}
    />
  )
}

GlobalSearch.propTypes = {
  query: PropTypes.string,
  handleChangeEvent: PropTypes.func.isRequired,
}

GlobalSearch.defaultProps = {
  query: '',
}

export default GlobalSearch
