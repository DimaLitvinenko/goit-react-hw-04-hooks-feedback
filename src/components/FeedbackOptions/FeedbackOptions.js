import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.scss';
import shortid from 'shortid';

const FeedbackOptions = ({ options, leaveFeedbackHandler }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={style.submitBtn}
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={leaveFeedbackHandler}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  leaveFeedbackHandler: PropTypes.func.isRequired,
};

export default FeedbackOptions;
