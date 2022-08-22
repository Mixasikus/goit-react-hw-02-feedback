export default function FeedBackStatistics({ good, neutral, bad, total }) {
  return (
    <li>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
    </li>
  );
}
