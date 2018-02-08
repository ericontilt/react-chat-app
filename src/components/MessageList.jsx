import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

import './MessageList.css';

const MessageList = ({
  messages = [],
}) => (
  <section className="MessageList">
    <ol>
      {
        messages.map(m => (
          <Message
            key={m.id}
            text={m.text}
            className={m.userId === 1 ? 'Message--mine' : 'Message--theirs'}
          />
        ))
      }
    </ol>
  </section>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
};
MessageList.defaultProps = {
  messages: [],
};

export default MessageList;
