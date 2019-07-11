import React, { Component } from 'react';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <nav className='navbar navbar-default wd-1150'>
        <div className='navbar-sidebar'>
          <img src="landing/images/logo.jpeg" className='company-logo' alt="GIFted Logo"/>
        </div>
        <div className='navbar-main'>
          <ul className='nav-links'>
            <li className='nav-item'><img alt='trending-icon' src="https://img.icons8.com/windows/32/000000/hashtag-2.png"/>Trending</li>
            <li className='nav-item'><img alt='trending-icon' src="https://img.icons8.com/windows/32/000000/multiple-choice.png"/>Random</li>
            <li className='nav-item'><img alt='trending-icon' src="https://img.icons8.com/windows/32/000000/high-importance.png"/>About</li>
            <li className='nav-item'><img alt='trending-icon' src="https://img.icons8.com/windows/32/000000/email.png"/>Contact Us</li>
            <li className='nav-item nav-button-item btn-upload-gif'>
              <button className='btn btn-sm navbar-btn-material btn animate-upload'><img src="https://img.icons8.com/windows/25/ffffff/upload.png" alt='upload-icon'/> Upload</button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

}

export default Landing;