import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Notification.scss';

class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return <h2 className={style.notification}>{this.props.message}</h2>;
  }
}
export default Notification;
