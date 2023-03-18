export default function Statistic({ content }) {
  let sum = 0;
  content.forEach((element) => (sum += element.exercises));

  return <p>total of {sum} exercises</p>;
}
