/* eslint-disable no-underscore-dangle */
import React from 'react'
import Board from 'react-trello'
import { makeStyles } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  progress: {
    margin: 50,
  },
})

function DashboardCourses(props) {
  const classes = useStyles()
  const {
    board,
    isLoading,
    updateStatus,
  } = props

  const onCard = (id, metadata, laneID) => {
    const { path } = board.lanes.filter(lane => lane.id === laneID)[0].cards
      .filter(card => card.id === id)[0]
    window.open(path, '_blank')
  }

  const onLane = async (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    if (sourceLaneId !== targetLaneId) {
      updateStatus(cardDetails._id.$oid, sourceLaneId, targetLaneId)
    }
  }

  return (
    <React.Fragment>
      { isLoading ? <CircularProgress className={classes.progress} />
        : <Board data={board} draggable onCardClick={onCard} handleDragEnd={onLane} />
    }
    </React.Fragment>
  )
}

DashboardCourses.propTypes = {
  board: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  isLoading: PropTypes.bool.isRequired,
  updateStatus: PropTypes.func.isRequired,
}

export default DashboardCourses
