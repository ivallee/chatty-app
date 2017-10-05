import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Messages extends Component {

  render() {
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

// Prop validation
Messages.propTypes = {
  username: PropTypes.string,
  content: PropTypes.string,
  sysMessage: PropTypes.string
};