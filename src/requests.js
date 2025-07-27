import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => 
  axios.get(baseUrl).then(resp => resp.data)

export const createNew = (newAnec) => 
  axios.post(baseUrl, newAnec).then(resp => resp.data)

export const update = (updAnec) =>
  axios.put(`${baseUrl}/${updAnec.id}`, updAnec).then(resp => resp.data)