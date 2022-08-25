import { Component } from 'react';

export default class Statistics extends Component {
  render() {
    // console.log(this.props.onLeaveFeedback);
    return (
      <>
        <ul>
          <li>Good: {this.props.good}</li>
          <li>Neutral: {this.props.neutral}</li>
          <li>Bad: {this.props.bad}</li>
          <li>Total: {this.props.total}</li>
          <li>Positive feedback: {this.props.positivePercentage}</li>
        </ul>
      </>
    );
  }
}

//     ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) {

//   );
// }

// export default function FeedBackStatistics({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) {
//   return (
//     <li>
//       Good: {good}</span>
//       <span>Neutral: {neutral}</span>
//       <span>Bad: {bad}</span>
//       <span>Total: {total}</span>
//       <span>Positive feedback: {positivePercentage}</span>
//     </li>
//   );
// }
