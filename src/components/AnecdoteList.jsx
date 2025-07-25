import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdota, handleClick }) => (
  <div style={{ marginBottom: '10px' }}>
    <div>
      {anecdota.content}
    </div>
    <div>
      has {anecdota.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
)

const AnecdoteList = () => {
  const dispatch = useDispatch()
  
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') return anecdotes

    return anecdotes.filter(
      a => a.content.toLowerCase().includes(filter.toLowerCase())
    )
  })

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdota={anecdote}
          handleClick={() => dispatch(vote(anecdote.id))}
        />
      )}
    </div>
  )
}

export default AnecdoteList