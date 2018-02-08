import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Message.css';

const Message = ({ text, className }) => (
  <li className={cx({ Message: true }, className)}>
    <blockquote>
      {text}
    </blockquote>
  </li>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Message;
