const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Never dispatch anything without an event-handler, for God sake'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (content) => ({ content, id: getId(), votes: 0 })

const initialState = anecdotesAtStart.map(asObject)


// reducer
const reducer = (state = initialState, action) => {
  console.log('action', action)

  switch (action.type) {
    case 'VOTE': {
      const ancForVote = state.find(a => a.id === action.payload)
      const ancVoted = { ...ancForVote, votes: ancForVote.votes + 1 }
      return state.map(a => a.id === action.payload ? ancVoted : a)
    }
    case 'NEW_ANECDOTE': {
      const newAnecdote = asObject(action.payload)
      return [...state, newAnecdote]
    }
    default: return state
  }
}


// action creators
export const vote = (payload) => ({ type: 'VOTE', payload })

export const createAnecdote = (payload) => ({ type: 'NEW_ANECDOTE', payload })

export default reducer