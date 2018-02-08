import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

import './MessageList.css';

const MessageList = ({
  userId,
  messages = [],
}) => (
  <section className="MessageList">
    <ol>
      {
        messages.map(m => (
          <Message
            key={m.id}
            text={m.text}
            className={m.userId === userId ? 'Message--mine' : 'Message--theirs'}
          />
        ))
      }
    </ol>
  </section>
);

MessageList.propTypes = {
  userId: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string),
};
MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
