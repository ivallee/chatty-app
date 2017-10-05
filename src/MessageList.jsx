import React, { Component } from 'react';
import Messages from './Messages.jsx';

class MessageList extends Component {
  render() {

    const posts = this.props.messages.map(post => {
      switch(post.type) {
        case 'incomingNotification':
          return <Messages
          key={post.id}
          sysMessage={post.content}
        />
          break;
        case 'incomingMessage':
          return <Messages
          key={post.id}
          username={post.username}
          content={post.content}
        />
          break;
        default:
          throw new Error('Unknown event type ' + msg.type);
      }
    });
    console.log("Rendering <MessageList />");
    return (
      <div className="messages">
        {posts}
      </div>
    );
  }
}
export default MessageList;