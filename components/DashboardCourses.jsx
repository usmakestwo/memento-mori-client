/* eslint-disable no-underscore-dangle */
import React from 'react'
import Board from 'react-trello'
import { makeStyles } from '@material-ui/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  progress: {
    flexGrow: 1,
  },
})

function DashboardCourses(props) {
  const classes = useStyles()
  const {
    board,
    isLoading,
    updateStatus,
    deleteCard,
    draggable,
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

  const onCardDelete = (cardId, laneId) => {
    deleteCard(cardId, laneId)
  }

  return (
    <React.Fragment>
      { isLoading ? <LinearProgress className={classes.progress} color="secondary" />
        : (
          <Board
            data={board}
            draggable={false}
            onCardClick={onCard}
            handleDragEnd={onLane}
            onCardDelete={onCardDelete}
            style={{ backgroundColor: '#0097a7', padding: 10 }}
          />
        )
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
  deleteCard: PropTypes.func.isRequired,
  draggable: PropTypes.bool.isRequired,
}

export default DashboardCourses
