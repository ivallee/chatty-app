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
      const tempMessages = this.state.messages;
      tempMessages.push(incoming);
      this.setState(tempMessages);
    }
  }

  changeUser(user) {
    console.log('Changing user to ' + user);
    this.setState({ currentUser: { name: user } });

  }


  addMessage(text, user) {
    console.log('Posting new message...');
    
    if (user !== this.state.currentUser.name) {
      this.changeUser(user);
    }
    this.socket.send(JSON.stringify( { username: (user ? user : 'Anonymous'), content: text } ))

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
