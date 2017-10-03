import React, { Component } from 'react';
import Messages from './Messages.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    return (
      <Messages />
    );
  }
}
export default MessageList;