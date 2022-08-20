import FeedBack from 'components/FeedBack/FeedBack';

const state = {
  good: 1,
  neutral: 3,
  bad: 4,
};

function countTotalFeedback(state) {
  let totalFeedBack = 0;

  for (let value of Object.values(state)) {
    totalFeedBack += value;
  }

  return (state.positiveFeedBack = totalFeedBack);
}

console.log(countTotalFeedback(state));

const App = () => (
  <>
    <FeedBack statistics={state} />
  </>
);

export default App;
