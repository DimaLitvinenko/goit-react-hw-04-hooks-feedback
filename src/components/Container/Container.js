import React from 'react';
import style from '../Container/Container.module.scss';

const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
