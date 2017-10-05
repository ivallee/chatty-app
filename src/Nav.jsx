import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h4 className="online-users">x users online</h4>
    </nav>
    );
  }
}

export default Nav;