import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  return (
    <>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <h2>statistic</h2>
          <table>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={(good - bad) / total} />
            <StatisticLine text="positive" value={(good / total) * 100 + "%"} />
          </table>
        </>
      )}
    </>
  );
}
