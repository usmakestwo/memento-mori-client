/**
 * Returns a promise with from the Courses API
 * @returns Promise
 */
import {
  getRecords,
  writeRecords,
  updateRecords,
} from '../config/production'

export const fetchRecord = async () => {
  const res = await fetch(getRecords)
  return res.json()
}

/**
 * Returns a promise with from the Courses API to create a course
 * @param {string} id - ID
 * @param {string} source - Source
 * @param {string} target - Target
 * @returns Promise
 */
export const updateRecord = async (id, source, target) => {
  const res = await fetch(updateRecords, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      source,
      target,
    }),
  })
  return res.status
}

/**
 * Returns a promise with from the Courses API to create a course
 * @param {object} payload - Course to create
 * @returns Promise
 */
export const createRecord = async (payload) => {
  const res = await fetch(writeRecords, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      description: payload.description,
    }),
  })
  return res.status
}
