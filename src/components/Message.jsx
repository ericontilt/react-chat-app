import React from 'react';
import cx from 'classnames';

import './Message.css';

const Message = ({ text, className }) => (
  <li className={cx({ Message: true }, className)}>
    <blockquote>
      {text}
    </blockquote>
  </li>
)

export default Message;
