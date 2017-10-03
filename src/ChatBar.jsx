import React, { Component } from 'react';

class ChatBar extends Component {
  
constructor(props){
  super(props);

  this.state = {
    inputValue: ''
  };
  this.handleMessageChange = this.handleMessageChange.bind(this);
}
  handleMessageChange(event) {
    this.setState({inputValue: event.target.value});
  }
  
  render() {
    
    const onKeyPress = (event) => {
      if (event.charCode === 13) {
        this.props.addMsg(this.state.inputValue, this.props.user);
        this.setState({inputValue: ''});
      }
    }
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your name (Optional)" defaultValue={this.props.user} />
        <input className="chatbar-message" placeholder='Type a message and hit ENTER' onChange={this.handleMessageChange} value={this.state.inputValue} onKeyPress={onKeyPress}/>
      </footer>
    );
  }
}
export default ChatBar;