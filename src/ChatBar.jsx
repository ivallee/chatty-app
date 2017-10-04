import React, { Component } from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.currentUser,
      inputValue: ''
    };
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }
  handleMessageChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  
  handleUserChange(event) {
    this.setState({ user: event.target.value });
  }

  render() {

    const onKeyPress = (event) => {
      if (event.charCode === 13 && event.target.value.length > 0) {
        this.props.addMsg(this.state.inputValue, this.state.user);
        this.setState({ inputValue: '' });
      }
    }
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your name (Optional)" defaultValue={this.props.currentUser} onChange={this.handleUserChange}/>
        <input className="chatbar-message" placeholder='Type a message and hit ENTER' value={this.state.inputValue} onChange={this.handleMessageChange} onKeyPress={onKeyPress} />
      </footer>
    );
  }
}
export default ChatBar;