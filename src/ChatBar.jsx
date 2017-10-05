import React, { Component } from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.currentUser,
      inputValue: ''
    };
    this.handleMessageField = this.handleMessageField.bind(this);
    this.handleUserField = this.handleUserField.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  handleMessageField(event) {
    this.setState({ inputValue: event.target.value });
  }
  
  handleUserField(event) {
    this.setState({ user: event.target.value });
  }

  submitMessage(event) {
    if (event.charCode === 13 && event.target.value.length > 0) {
      this.props.addMsg(this.state.inputValue, this.state.user);
      this.setState({ inputValue: '' });
    }
  }

  changeUser(event) {
    if (event.charCode === 13 && event.target.value.length > 0) {
      this.props.changeUser(event.target.value);
    }
  }

  render() {

    return (
      <footer className="chatbar">
        <input 
          className="chatbar-username" 
          placeholder="Your name (Optional)" 
          onChange={this.handleUserField}
          onKeyPress={this.changeUser}
          />
        <input 
          className="chatbar-message" 
          placeholder='Type a message and hit ENTER' 
          value={this.state.inputValue} 
          onChange={this.handleMessageField} 
          onKeyPress={this.submitMessage} 
          />
      </footer>
    );
  }
}
export default ChatBar;