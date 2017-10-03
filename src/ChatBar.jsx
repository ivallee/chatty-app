import React, { Component } from 'react';

class ChatBar extends Component {
  render() {
    const onKeyPress = (event) => {
      if (event.charCode === 13) {
        console.log(event.target.value);
        this.props.addMsg(event.target.value);
      }
    }
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.user} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={onKeyPress}/>
      </footer>
    );
  }
}
export default ChatBar;