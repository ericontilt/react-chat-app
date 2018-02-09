import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
              message={m.message}
              className={cx({
                [`Message--${m.userId === userId ? 'mine' : 'theirs'}`]: true,
              }, m.style ? `Message--${m.style}` : null)}
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
