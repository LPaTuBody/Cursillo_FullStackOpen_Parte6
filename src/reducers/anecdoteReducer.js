import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      const anecdota = action.payload
      return state.map(a => a.id === anecdota.id ? anecdota : a)
    },
    appendAnecdote(state, action) {
      return [...state, action.payload]
    }
  }
})

export const initialStore = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnec = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnec))
  }
}

export const vote = (anecdote) => {
  return async (dispatch) => {
    const anecVoted = { ...anecdote, votes: anecdote.votes + 1 }
    const updAnec = await anecdotesService.update(anecVoted.id, anecVoted)
    dispatch(updateAnecdote(updAnec))
  }
}

export const { setAnecdotes, appendAnecdote, updateAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer