import React from 'react';
import PropTypes from 'prop-types';

import './AddMessage.css';

const AddMessage = ({ addMessage, userId }) => {
  let textInput;
  const handleSendClick = () => {
    addMessage(textInput.value, userId);
    textInput.value = '';
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };
  return (
    <section className="AddMessage">
      <input
        className="AddMessage__input"
        type="text"
        ref={(node) => { textInput = node; }}
        onKeyPress={handleKeyPress}
      />
      <button className="AddMessage__sendButton" onClick={handleSendClick}>Send</button>
    </section>
  );
};

AddMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default AddMessage;
