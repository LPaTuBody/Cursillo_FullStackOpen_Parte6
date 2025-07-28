import { useQueryClient, useMutation } from '@tanstack/react-query'
import { createNew } from '../requests'
import { useNotiDispatch, setNoti } from '../contexts/NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotiDispatch()

  const newAnecMutation = useMutation({
    mutationFn: createNew,
    onSuccess: (newAnec) => {
      dispatch(setNoti(`New anecdote "${newAnec.content}" added!`))
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnec))
    },
    onError: (err) => {
      dispatch(setNoti(err.response.data.error))
    }
  })

  const onCreate = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    newAnecMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate} style={{ marginBottom: '20px' }}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
