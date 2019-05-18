/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import MainToolbar from '../components/MainToolbar'
import CourseDialog from '../components/CourseDialog'
import DashboardCourses from '../components/DashboardCourses'
import { fetchRecord, updateRecord, createRecord } from '../api/courses'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
  },
}

function IndexPage(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [course, setCourse] = useState({ name: '', description: '' })
  const [board, setBoard] = useState([])
  const [open, setOpen] = useState(false)

  // Fetch todos from API
  const fetchData = async () => {
    setIsLoading(true)
    const result = await fetchRecord()
    setBoard({ lanes: JSON.parse(result) })
    setIsLoading(false)
  }

  // Call Todos on load
  useEffect(() => {
    fetchData()
  }, [])

  const createCourse = async () => {
    try {
      await createRecord(course)
      setOpen(false)
      fetchData()
    } catch (error) {
      // eslint-disable-next-line no-console
      alert(error)
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

  const updateStatus = async (id, source, target) => {
    try {
      await updateRecord(id, source, target)
      fetchData()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Memento Mori Universitas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid container spacing={24}>
        <MainToolbar {...props} handleClickOpen={handleClickOpen} />
        <Grid item xs={12} style={styles.body}>
          <DashboardCourses
            board={board}
            isLoading={isLoading}
            fetchData={() => fetchData()}
            updateStatus={(id, status, target) => updateStatus(id, status, target)}
          />
        </Grid>
        <CourseDialog
          open={open}
          handleClose={handleClose}
          createCourse={createCourse}
          handleChange={handleChange}
        />
      </Grid>
    </React.Fragment>
  )
}


IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(IndexPage)
