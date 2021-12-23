import React from 'react';
import PropTypes from 'prop-types';
import style from '../Statistics/Statistics.module.scss';

const Statistics = ({ options }) => {
  return (
    <ul className={style.list}>
      {options.map(([item, value], index) => (
        <li key={index} className={style.item}>
          <p className={style.signature}>{item}:</p>
          <p className={style.quantity}>{value}</p>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array),
};

export default Statistics;
