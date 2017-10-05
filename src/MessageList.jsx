import React, { Component } from 'react';
import Messages from './Messages.jsx';
import PropTypes from 'prop-types';

class MessageList extends Component {
  render() {

    const posts = this.props.messages.map(post => {
      switch(post.type) {
        case 'incomingNotification':
          return <Messages
          key={post.id}
          sysMessage={post.content} />
        case 'incomingMessage':
          return <Messages
          key={post.id}
          username={post.username}
          content={post.content}
        />
        default:
          throw new Error('Unknown event type ' + post.type);
      }
    });
    return (
      <div className="messages">
        {posts}
      </div>
    );
  }
}


export default MessageList;

// Prop validation
MessageList.propTypes = {
  messages: PropTypes.array,
};
