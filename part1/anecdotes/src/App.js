import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let points = Array(8).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [mostVote, setMostVote] = useState(-1)

  const handleNext = () => {
    const aLength = anecdotes.length
    const random = Math.floor(Math.random() * aLength)
    setSelected(() => random)
  }

  const handleVote = () => {
    let newVotes = [...votes]
    newVotes[selected]++
    setVotes(() => newVotes)

    let maxPosition = 0
    for (let i = 0; i < newVotes.length; i++) {
      if (newVotes[i] > newVotes[maxPosition]) {
        maxPosition = i
      }
    }
    setMostVote(() => maxPosition)
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>
          {anecdotes[selected]}
        </p>
        <p>
          has {votes[selected]} votes
        </p>
      </div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {mostVote >= 0 &&
        <>
          <p>{anecdotes[mostVote]}</p>
          <p>has {votes[mostVote]} votes</p>
        </>}

    </>
  )
}

export default App
