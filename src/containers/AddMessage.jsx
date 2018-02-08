import { connect } from 'react-redux';

import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../actions';

export default connect(() => ({}), dispatch => ({
  addMessage: (message, userId) => {
    dispatch(addMessage(message, userId));
  },
}))(AddMessageComponent);
