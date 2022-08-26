export default function Statistics({
  total,
  good,
  neutral,
  bad,
  positivePercentage,
}) {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
    </>
  );
}
