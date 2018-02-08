import { connect } from 'react-redux';

import MessagesListComponent from '../components/MessageList';

export default connect(state => ({
  messages: state.messages,
  userId: state.userId,
}), {})(MessagesListComponent);
