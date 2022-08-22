import React, { Component } from 'react';
import FeedBackStatistics from './FeedBackStatistics';
import ButtonsList from './ButtonsListItem';

export default class FeedBack extends Component {
  render() {
    // console.log(this.props.statistics.countTotalFeedback());
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <ButtonsList />
        </ul>
        <h1>Statistics</h1>
        <ul>
          <FeedBackStatistics
            good={this.props.statistics.good}
            neutral={this.props.statistics.neutral}
            bad={this.props.statistics.bad}
            total={this.props.countTotal}
          />
        </ul>
      </div>
    );
  }
}

//     ({ statistics }) {
//   return (
//     <div>
//       <h1>Please leave feedback</h1>
//       <ButtonsContainer>
//         {statistics.map(statistic => (
//           <button key={statistic.Good}>{statistic.Good}</button>
//         ))}
//       </ButtonsContainer>
//     </div>
//   );
// }
