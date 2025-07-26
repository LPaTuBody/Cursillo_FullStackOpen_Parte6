import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes (state, action) {
      return action.payload
    },
    vote (state, action) {
      const ancForVote = state.find(a => a.id === action.payload)
      const ancVoted = { ...ancForVote, votes: ancForVote.votes + 1 }
      return state.map(a => a.id === action.payload ? ancVoted : a)
    },
    createAnecdote (state, action) {
      return [...state, action.payload]
    }
  }
})

export const { vote, createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer