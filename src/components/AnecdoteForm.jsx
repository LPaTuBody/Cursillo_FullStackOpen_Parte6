import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdota.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(`New anecdote "${content}" added!`, 5))
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