import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getAnecdotes, update } from './requests'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const queryClient = useQueryClient()

  const updAnecMutation = useMutation({
    mutationFn: update,
    onSuccess: (updAnec) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const mapedAnec = anecdotes.map(a => a.id === updAnec.id ? updAnec : a)
      queryClient.setQueryData(['anecdotes'], mapedAnec)
    }
  })

  const handleVote = (anecdote) => {
    const anecVoted = { ...anecdote, votes: anecdote.votes + 1 }
    updAnecMutation.mutate(anecVoted)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })
  // console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return <div>Loading data...</div>
  } else if (result.isError) {
    return <div>Anecdote service not available due to problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h2>Anecdote app</h2>
    
      <Notification />
      <AnecdoteForm />
    
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

export default App
