import React, { Component } from 'react';
import Statistics from 'components/FeedBack/Statistics';
import FeedbackOptions from 'components/FeedBack/FeedbackOptions';
import Section from 'components/FeedBack/Section';

export default class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);

    return valuesArr.reduce((acc, val) => {
      acc = val;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      Math.floor((this.state.good / this.state.total) * 100) + '%';

    return positivePercentage;
  };

  //   onClickFeedBack = label => {
  //     this.setState(prevState => {
  //       return {
  //         good: prevState.good + 1,
  //       };
  //     });
  //   };

  onClickFeedBack = label => {
    console.log(label);
  };

  // onClickRender = () => {

  // }

  render() {
    const state = this.state;

    return (
      <>
        <Section>
          Please leave feedback
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onClickFeedBack}
          />
        </Section>
        <Section>
          <Statistics
            // onLeaveFeedback={this.onClickFeedBack}
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
