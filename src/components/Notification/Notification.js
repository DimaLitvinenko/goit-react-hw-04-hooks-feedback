import React from 'react';
import PropTypes from 'prop-types';
import style from '../Notification/Notification.module.scss';

const Notification = ({ message }) => (
  <h2 className={style.title}>{message}</h2>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
