import React, { Component } from 'react';
// import Messages from './Messages.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList>

        </MessageList>

        <ChatBar />
      </div>
    );
  }
}
export default App;
