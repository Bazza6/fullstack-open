import Part from "./Part";
import Statistic from "./Statistic";

export default function Content({ content }) {
  return (
    <>
      <ul>
        {content.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <Statistic content={content} />
    </>
  );
}
