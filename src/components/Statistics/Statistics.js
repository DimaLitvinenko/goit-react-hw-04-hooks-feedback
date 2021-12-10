import React from 'react';
import PropTypes from 'prop-types';
import style from '../Statistics/Statistics.module.scss';

const Statistics = ({ options }) => {
  return (
    <ul className={style.list}>
      {options.map((item, id) => (
        <li key={id} className={style.item}>
          <p className={style.signature}>{item[0]}:</p>
          <p className={style.quantity}>{item[1]}</p>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array),
};

export default Statistics;
