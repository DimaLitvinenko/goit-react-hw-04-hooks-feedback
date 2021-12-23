import React from 'react';
import PropTypes from 'prop-types';
import style from '../FeedbackOptions/FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, leaveFeedbackHandler }) => {
  return (
    <ul className={style.list}>
      {options.map((option, index) => (
        <li key={index} className={style.item}>
          <button
            type="button"
            className={style.btn}
            onClick={() => leaveFeedbackHandler(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedbackHandler: PropTypes.func.isRequired,
};

export default FeedbackOptions;
