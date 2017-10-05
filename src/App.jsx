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
      console.log(incoming.type);
      const tempMessages = this.state.messages;
      tempMessages.push(incoming);
      this.setState(tempMessages);
    }
  }

  changeUser(newUser) {
    const oldUser = this.state.currentUser.name;
    if (newUser !== oldUser) {
      this.setState({ currentUser: { name: newUser } });
      this.socket.send(JSON.stringify({content: `${oldUser} has changed their name to ${newUser}`, type: 'postNotification' }))
    }
  }

  addMessage(text, user) {
    console.log('Posting new message...');
    
    this.changeUser(user);

    this.socket.send(JSON.stringify( { username: (user ? user : 'Anonymous'), 
                                        content: text,
                                           type: "postMessage" } ))

    // If no username, user is anonymous

    // If user exists and is different from current user,
        // Type will be notification

  }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={ this.state.messages } />

        <ChatBar 
          currentUser={ this.state.currentUser.name } 
          addMsg={ this.addMessage}  
          changeUser={ this.changeUser } 
          />
      </div>
    );
  }
}
export default App;
