export default function Statistic({ content }) {
  // content.forEach((element) => (sum += element.exercises));
  const total = content.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return <p>total of {total} exercises</p>;
}
