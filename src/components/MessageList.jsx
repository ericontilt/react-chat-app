import React from 'react';

import Message from './Message';

import './MessageList.css'

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
              className={userId === m.userId ? 'Message--mine' : 'Message--theirs'}
            />
          ))
        }
      </ol>
    </section>
  )

export default MessageList;
