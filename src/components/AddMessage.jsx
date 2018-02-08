import React from 'react';

import './AddMessage.css';

const AddMessage = () => (
  <section className="AddMessage">
    <input className="AddMessage__input" type="text" />
    <button className="AddMessage__sendButton">Send</button>
  </section>
);

export default AddMessage;
