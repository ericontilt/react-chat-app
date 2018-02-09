import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Message.css';

const Message = ({ message, className }) => (
  <li className={cx({ Message: true }, className)}>
    <blockquote>
      {message}
    </blockquote>
  </li>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Message;
