import { connect } from 'react-redux';

import HeaderComponent from '../components/Header';

export default connect((state) => {
  const otherUser = state.users.find(u => u.userId !== state.userId);
  if (otherUser && otherUser.name && otherUser.name.length > 0) {
    return { text: otherUser.name };
  }
  return {};
}, {})(HeaderComponent);
