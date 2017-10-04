import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: '',
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount <App />');

    this.socket = new WebSocket(`ws://${location.hostname}:3001`);

    this.socket.onopen = (event) => {
      console.log('Connected to server');
    }

    this.socket.onmessage = (event) => {
      const incoming = JSON.parse(event.data);
      const tempMessages = this.state.messages;
      tempMessages.push(incoming);
      this.setState(tempMessages);
    }
  }

  addMessage(text, user) {
    console.log('Posting new message...');

    this.setState({ currentUser: { name: user } });
    this.socket.send(JSON.stringify({ username: user, content: text }))

  }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />

        <ChatBar currentUser={this.state.currentUser.name} addMsg={this.addMessage} />
      </div>
    );
  }
}
export default App;
