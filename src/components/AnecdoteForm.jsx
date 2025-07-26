import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    dispatch(createAnecdote(e.target.anecdota.value))
    dispatch(setNotification('New anecdote added!'))
  }

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={addAnecdote}>
        <div><input name='anecdota' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm