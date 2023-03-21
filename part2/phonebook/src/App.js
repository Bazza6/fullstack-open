import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 659595555 }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const isDuplicated = () => {
    let found = false
    persons.forEach(p => {
      if (p.name === newName) {
        alert(`${newName} is already added to phonebook`)
        found = true
      }
    })
    return found
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isDuplicated() === true) {
      setNewName('')
      return
    } else {
      const newContact = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newContact))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with:
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => { setNewName(e.target.value) }}
          />
        </div>
        <div>
          number:
          <input
            type='number'
            value={newNumber}
            onChange={(e) => { setNewNumber(e.target.value) }}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons
          .filter(word => word.name.toUpperCase().includes(filter.toUpperCase()))
          .map((person) => <p key={person.name}>{person.name} {person.number}</p>)}</div>
    </div>
  )
}

export default App

