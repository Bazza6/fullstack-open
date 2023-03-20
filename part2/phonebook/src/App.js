import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

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
        name: newName
      }
      setPersons(persons.concat(newContact))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => { setNewName(e.target.value) }}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person) => <p key={person.name}>{person.name}</p>)}</div>
    </div>
  )
}

export default App

