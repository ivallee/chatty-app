import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import Nav from './Nav.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Anonymous'},
      clients: 0,
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
      if (incoming.clients) {
        this.setState({ clients: incoming.clients });
      }
      this.setState({ 
        messages: tempMessages.concat(incoming) });
    }
  }

  changeUser(newUser) {
    const oldUser = this.state.currentUser.name;
    if (newUser !== oldUser) {
      this.setState({ currentUser: { name: newUser } });
      this.socket.send(JSON.stringify({
        content: `${oldUser} has changed their name to ${newUser}`, 
        type: 'postNotification' 
      }));
    }
  }

  addMessage(text, user) {
    console.log('Posting new message...');
    
    this.changeUser(user ? user : 'Anonymous');

    this.socket.send(JSON.stringify( { 
      username: (user ? user : 'Anonymous'), 
      content: text,
      type: 'postMessage' 
    }));
  }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <Nav clients={ this.state.clients } />
        <MessageList messages={ this.state.messages } currentUser={ this.state.currentUser } />

        <ChatBar 
          currentUser={ this.state.currentUser.name } 
          addMsg={ this.addMessage }  
          changeUser={ this.changeUser } 
          />
      </div>
    );
  }
}
export default App;
