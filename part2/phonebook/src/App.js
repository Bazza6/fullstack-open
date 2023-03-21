import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AddUser from './AddUser'
import FilterInput from './FilterInput'
import UserDetails from './UserDetails'

const App = () => {
  const [persons, setPersons] = useState([])
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

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <AddUser
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <div>
        {persons
          .filter(word => word.name.toUpperCase().includes(filter.toUpperCase()))
          .map((person) => <UserDetails key={person.name} person={person} ></UserDetails>)}</div>
    </div>
  )
}

export default App

