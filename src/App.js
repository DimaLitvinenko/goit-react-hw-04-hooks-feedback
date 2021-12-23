import './App.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    option === 'good' && setGood(prevState => prevState + 1);
    option === 'neutral' && setNeutral(prevState => prevState + 1);
    option === 'bad' && setBad(prevState => prevState + 1);
  };

  const feedbackOptions = { good, neutral, bad };

  const countTotalFeedback = () =>
    Object.values(feedbackOptions).reduce((acc, current) => acc + current);

  const countPositiveFeedback = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const getStatisticsOptions = () => [
    ...Object.entries(feedbackOptions),
    ['total', countTotalFeedback()],
    ['positive feedback', countPositiveFeedback() + `%`],
  ];

  return (
    <main className="App">
      <Container>
        <Section title="Please leave your Feedback">
          <FeedbackOptions
            options={Object.keys(feedbackOptions)}
            leaveFeedbackHandler={handleFeedback}
          />
        </Section>

        {countTotalFeedback() === 0 && isNaN(countPositiveFeedback()) ? (
          <Notification message="No Feedback" />
        ) : (
          <Section title="Statictics">
            <Statistics options={getStatisticsOptions()} />
          </Section>
        )}
      </Container>
    </main>
  );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
