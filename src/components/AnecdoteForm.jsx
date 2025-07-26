import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdota.value
    const newAnec = await anecdotesService.createNew(content)
    dispatch(createAnecdote(newAnec))
    dispatch(setNotification(`New anecdote "${content}" added!`))
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