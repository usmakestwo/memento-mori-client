/**
 * Returns the selected card based on the query
 * @param {object} inputData - Two dimensional array
 * @param {string} query - Query to search against
 * @returns {object}
 */
const search = (inputData, query) => {
  const newData = inputData
  for (let x = 0; x < inputData.lanes.length; x += 1) {
    for (let y = 0; y < inputData.lanes[x].cards.length; y += 1) {
      const selectedCard = inputData.lanes[x].cards[y].title.toLowerCase()
      const filteredResult = selectedCard.includes(query) ? inputData.lanes[x].cards[y] : null
      if (filteredResult) {
        newData.lanes[x].cards = filteredResult
        return newData
      }
    }
  }
  return newData
}

export default search
