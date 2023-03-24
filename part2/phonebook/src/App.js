import { useEffect } from 'react'
import { useState } from 'react'
import AddUser from './AddUser'
import FilterInput from './FilterInput'
import { addPerson, getPersons, updatePerson } from './services/persons'
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
        found = true
      }
    })
    return found
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isDuplicated() === true) {
      if (window.confirm(`${newName} is already on the phonebook. Replace the nuber with this one?`)) {
        const duplicated = persons.filter(p => p.name === newName)
        const updatedObj = { ...duplicated[0], number: newNumber }
        updatePerson(duplicated[0].id, updatedObj);
        setPersons(persons.map(p => p.name === newName ? updatedObj : p))
      }
    } else {
      const newContact = {
        name: newName,
        number: newNumber
      }
      addPerson(newContact).then((response) => {
        setPersons(persons.concat(response))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    getPersons()
      .then(response => {
        setPersons(response)
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
          .map((person) => {
            return (
              <UserDetails
                key={person.name}
                person={person}
                persons={persons}
                setPersons={setPersons}
              />)
          })}
      </div>
    </div>
  )
}

export default App

