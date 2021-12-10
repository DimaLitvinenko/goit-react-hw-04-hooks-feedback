import './App.scss';
import React, { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, current) => acc + current);

  countPositiveFeedback = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  getStatisticsOptions = () => [
    ...Object.entries(this.state),
    ['total', this.countTotalFeedback()],
    ['positive feedback', this.countPositiveFeedback() + `%`],
  ];

  render() {
    return (
      <Container>
        <Section title="Please leave your Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            leaveFeedbackHandler={this.handleFeedback}
          />
        </Section>

        {this.countTotalFeedback() === 0 ||
        isNaN(this.countPositiveFeedback()) ? (
          <Notification message="No Feedback" />
        ) : (
          <Section title="Statictics">
            <Statistics options={this.getStatisticsOptions()} />
          </Section>
        )}
      </Container>
    );
  }
}
export default App;
