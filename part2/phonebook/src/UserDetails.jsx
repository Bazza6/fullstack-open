import { deletePerson } from "./services/persons";

export default function UserDetails({ person, persons, setPersons }) {
  const handleClick = () => {
    deletePerson(person.id);
    setPersons([...persons].filter((p) => p.id !== person.id));
  };
  console.log("sss:", persons);
  return (
    <div>
      <span>
        {person.name} {person.number}
      </span>
      <button onClick={handleClick}>delete</button>
    </div>
  );
}
