import React, { Component } from 'react';

class Messages extends Component {

  render() {
    console.log("Rendering <Messages/>");
    return (

      <div className="message">
        <span className="message-username">{this.props.username}</span>
        <span className="message-content">{this.props.content}</span>


        <div className="message system">
          {this.props.sysMessage}
        </div>
      </div>
    );
  }
}
export default Messages;