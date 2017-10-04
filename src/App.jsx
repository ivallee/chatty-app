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


    // For simulating a new message:
    // setTimeout(() => {
    //   console.log('Simulating incoming message');
    //   const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
    //   const messages = this.state.messages.concat(newMessage)

    //   this.setState({messages: messages})
    // }, 3000);
  }
  
  addMessage(text, user) {
    console.log('Posting new message...');
    
    this.socket.send(JSON.stringify({username: user, content: text}))
    
    // For generating new messages client-side
    // const newId = this.state.messages.length + 1;
    // const newMessage = {id: newId, username: user, content: text};
    // const messages = this.state.messages.concat(newMessage)
    // this.setState({messages: messages });
  }


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />

        <ChatBar user={this.state.currentUser.name} addMsg={this.addMessage}/>
      </div>
    );
  }
}
export default App;
