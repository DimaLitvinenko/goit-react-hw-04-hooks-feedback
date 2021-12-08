import './App.scss';
import React from 'react';
import { Component } from 'react';
import Statistics from './components/Statistic/Statistics';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeadbackHandler = ({ target }) => {
    const newFeedback = target.name;
    this.setState(prevState => ({
      [newFeedback]: prevState[newFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedback = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  countNonFeedback = () =>
    this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0
      ? true
      : false;

  render() {
    const {
      leaveFeadbackHandler,
      countTotalFeedback,
      countPositiveFeedback,
      countNonFeedback,
    } = this;
    const { good, neutral, bad } = this.state;
    const objKey = Object.keys(this.state);

    return (
      <>
        <Container>
          <Section title="Leave your Feedback">
            <FeedbackOptions
              options={objKey}
              leaveFeedbackHandler={leaveFeadbackHandler}
            />
          </Section>

          <Section title="Statistics">
            {countNonFeedback() ? (
              <Notification message="No any feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positiveFeedback={countPositiveFeedback()}
              />
            )}
          </Section>
        </Container>
      </>
    );
  }
}
export default App;
