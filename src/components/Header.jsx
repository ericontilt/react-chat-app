import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ text }) => (text && text.length > 0 ? (
  <section className="Header">
    <span className="Header__text">{text}</span>
  </section>
) : null);

Header.propTypes = {
  text: PropTypes.string, //eslint-disable-line
};

export default Header;
