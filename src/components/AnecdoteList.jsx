import { useQueryClient, useMutation } from '@tanstack/react-query'
import { update } from "../requests"
import { useNotiDispatch, setNoti } from '../contexts/NotificationContext'

const AnecdoteList = ({ anecdotes }) => {
  const queryClient = useQueryClient()
  const dispatch = useNotiDispatch()

  const updAnecMutation = useMutation({
    mutationFn: update,
    onSuccess: (updAnec) => {
      dispatch(setNoti(`Anecdote "${updAnec.content}" voted!`))
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const mapedAnec = anecdotes.map(a => a.id === updAnec.id ? updAnec : a)
      queryClient.setQueryData(['anecdotes'], mapedAnec)
    },
    onError: (err) => {
      dispatch(setNoti(err.response.data.error))
    }
  })

  const handleVote = (anecdote) => {
    const anecVoted = { ...anecdote, votes: anecdote.votes + 1 }
    updAnecMutation.mutate(anecVoted)
  }
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id} style={{ marginBottom: '10px' }}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList