export default function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  console.log("total", total);
  return (
    <>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <h2>statistic</h2>
          <p>good: {good}</p>
          <p>neutral: {neutral}</p>
          <p>bad: {bad}</p>
          <p>all: {total}</p>
          <p>average: {(good - bad) / total}</p>
          <p>positive: {(good / total) * 100}</p>
        </>
      )}
    </>
  );
}
