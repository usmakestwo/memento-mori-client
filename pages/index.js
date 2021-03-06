/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Error from 'next/error'
import MainToolbar from '../components/MainToolbar'
import CourseDialog from '../components/CourseDialog'
import DashboardCourses from '../components/DashboardCourses'
import ErrorSnackDialog from '../components/ErrorSnackDialog'
import { fetchRecord, updateRecord, createRecord } from '../api/courses'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  body: {
    padding: 0,
  },
  actionBtn: {
    color: '#fff',
  },
})

function IndexPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [course, setCourse] = useState({ name: '', description: '' })
  const [board, setBoard] = useState([])
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [draggable, setDraggable] = useState(true)
  const [online, setOnline] = useState(true)
  const [message, setMessage] = useState('An error occured, please try again')
  const classes = useStyles()

  // Fetch todos from API
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const result = await fetchRecord()
      setBoard({ lanes: JSON.parse(result) })
      setIsLoading(false)
    } catch (err) {
      setIsLoading(true)
      setMessage(err.toString())
      setError(true)
    }
  }

  // Call Todos on load
  useEffect(() => {
    fetchData()
    setOnline(navigator.onLine)
  }, [])

  const createCourse = async () => {
    try {
      setIsCreating(true)
      await createRecord(course)
      setIsCreating(false)
      setOpen(false)
      fetchData()
    } catch (err) {
      setIsCreating(false)
      setMessage(err.toString())
      setError(true)
    }
  }

  const handleChange = (event) => {
    setCourse({
      ...course,
      [event.target.id]: event.target.value,
    })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleErrorClose = () => {
    setError(false)
  }

  const isDraggable = (isDraggableState) => {
    setDraggable(isDraggableState)
  }

  const updateStatus = async (id, source, target) => {
    try {
      await updateRecord(id, source, target)
      fetchData()
    } catch (err) {
      setMessage(err.toString())
      setError(true)
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Memento Mori Universitas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid container>
        <MainToolbar
          {...classes}
          handleClickOpen={handleClickOpen}
          draggable={draggable}
          isDraggable={isDraggable}
          online={online}
        />
        <Grid item xs={12} className={classes.body}>
          { error ? <Error />
            : (
              <DashboardCourses
                board={board}
                isLoading={isLoading}
                error={error}
                draggable={draggable}
                fetchData={() => fetchData()}
                updateStatus={(id, status, target) => updateStatus(id, status, target)}
              />
            )
          }
        </Grid>
        <CourseDialog
          open={open}
          handleClose={handleClose}
          createCourse={createCourse}
          handleChange={handleChange}
          isCreating={isCreating}
        />
        <ErrorSnackDialog
          error={error}
          message={message}
          handleErrorClose={handleErrorClose}
        />
      </Grid>
    </React.Fragment>
  )
}

export default IndexPage
