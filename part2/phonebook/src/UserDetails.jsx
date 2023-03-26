import Error from "./Error";
import { deletePerson } from "./services/persons";

export default function UserDetails({
  person,
  persons,
  setPersons,
  setErrorMessage,
  setNotification,
}) {
  const handleClick = () => {
    deletePerson(person.id)
      .then(() => {
        setNotification(`${person.name} was deleted`);
        setTimeout(() => {
          setNotification(null);
        }, 2000);
        setPersons(persons.filter((p) => p.id !== person.id));
      })
      .catch((error) => {
        setErrorMessage(
          `Information on ${person.name} has already been removed from the server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000);
        setPersons(persons.filter((p) => p.id !== person.id));
      });
  };
  return (
    <li>
      <span>
        {person.name} {person.number}
      </span>
      <button onClick={handleClick}>delete</button>
    </li>
  );
}
