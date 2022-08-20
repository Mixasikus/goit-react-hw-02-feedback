export default function FeedBackStatistics({
  good,
  neutral,
  bad,
  positiveFeedBack,
}) {
  return (
    <li>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Positive feedback: {positiveFeedBack}</span>
    </li>
  );
}
