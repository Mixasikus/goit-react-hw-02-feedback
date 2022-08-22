// import { render } from '@testing-library/react';
import FeedBack from 'components/FeedBack/FeedBack';
import React, { Component } from 'react';
// import state from './State/State';

export default class App extends Component {
  state = {
    good: 1,
    neutral: 3,
    bad: 4
  };

  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };


  render() {
    return (
      <>
        <FeedBack statistics={this.state} countTotal={this.countTotalFeedback()} />
      </>
    );
  }
}
