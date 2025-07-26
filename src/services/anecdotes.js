import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

const createNew = async (content) => {
  const newAnec = { content, votes: 0 }
  const resp = await axios.post(baseUrl, newAnec)
  return resp.data
}

const update = async (id, content) => {
  const resp = await axios.put(`${baseUrl}/${id}`, content)
  return resp.data
}

export default { getAll, createNew, update }