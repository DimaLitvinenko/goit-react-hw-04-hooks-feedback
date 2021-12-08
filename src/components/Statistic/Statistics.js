import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.scss';
class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    totalPositive: PropTypes.number,
  };

  render() {
    return (
      <>
        <h2 className={style.title}>Statistics</h2>
        <ul className={style.list}>
          <li className={style.item}>Good: {this.props.good}</li>
          <li className={style.item}>Neutral: {this.props.neutral}</li>
          <li className={style.item}>Bad: {this.props.bad}</li>
          <li className={style.item}>Total: {this.props.total}</li>
          <li className={style.item}>
            Positive feedback: {this.props.positiveFeedback} %
          </li>
        </ul>
      </>
    );
  }
}

export default Statistics;
