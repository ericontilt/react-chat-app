import { connect } from 'react-redux';

import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../actions';

const mapStateToProps = state => ({
  userId: state.userId,
});

const mapDispatchToProps = dispatch => ({
  addMessage: (message, userId) => {
    dispatch(addMessage(message, userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent);
