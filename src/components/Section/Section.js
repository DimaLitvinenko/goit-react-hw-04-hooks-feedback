import React from 'react';
import PropTypes from 'prop-types';
import style from '../Section/Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
