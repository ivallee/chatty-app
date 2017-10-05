import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty <i className="fa fa-bullhorn" ></i></a>
      <h4 className="online-users">{ this.props.clients } user(s) online</h4>
    </nav>
    );
  }
}

export default Nav;