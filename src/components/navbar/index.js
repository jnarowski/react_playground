import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primarynavbar-dark bg-primary">
        <div className='container'>
          <Link className="navbar-brand" to="/">React Playground</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/widgets">Widgets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/widgets-starter-kit">Widgets (Starter Kit)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
