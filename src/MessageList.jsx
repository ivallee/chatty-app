import React, { Component } from 'react';
import Messages from './Messages.jsx';

class MessageList extends Component {
  render() {
    const posts = this.props.messages.map(post => {
      return <Messages 
        key={ post.id }
        username={ post.username }
        content={ post.content } />
    });
    console.log("Rendering <MessageList />");
    return (
    <div className="messages">
      { posts }
    </div>
    );
  }
}
export default MessageList;