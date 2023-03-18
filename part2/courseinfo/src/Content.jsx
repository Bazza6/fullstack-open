import Part from "./Part";

export default function Content({ content }) {
  console.log(content);
  return (
    <ul>
      {content.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </ul>
  );
}
