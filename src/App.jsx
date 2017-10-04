import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: {name: 'Bob'},
      messages: [
        // {
        //   id: 1,
        //   username: 'Bob',
        //   content: 'Has anyone seen my marbles?'
        // },
        // {
        //   id: 2,
        //   username: 'Anonymous',
        //   content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        // }
      ]
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
      const inMessage = JSON.parse(event.data);
      const tempMessages = this.state.messages;
      tempMessages.push(inMessage);
      this.setState(tempMessages);
      console.log(JSON.parse(event.data));
    }

  }
  
  addMessage(text, user) {
    console.log('Posting new message...');
    
    this.setState({currentUser: {name: user}});
    this.socket.send(JSON.stringify({username: user, content: text}))
    
  }


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />

        <ChatBar currentUser={this.state.currentUser.name} addMsg={this.addMessage}/>
      </div>
    );
  }
}
export default App;
