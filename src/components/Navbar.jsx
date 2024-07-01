import React, { Component } from 'react'
import "../styles/Navbar.css"

class Navbar extends Component {

  state = { clicked: false };
  handleclick = ()=>{
    this.setState({clicked: !this.state.clicked});
  }

  render() {

    return (
      <>
        <nav>
          <a href="/" className='logo'>Muhammad <span>Abdullah</span></a>
          <div>
            <ul id='navbar' className={this.state.clicked  ? "#navbar active" : "#navbar"}>
              <li><a href="#">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Skill">Skills</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Portfolio">Portfolio</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i>
            {/* <i class='bx bx-x'></i> */}
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar