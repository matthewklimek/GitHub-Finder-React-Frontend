import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';




const myNavbar = ({title}) => {

 
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand><Link className="text-white mx-2"  to="/">{title}</Link></Navbar.Brand>
        <Nav className="mr-auto">
         
          <Link className="text-white mx-2"  to="/">Home</Link>
         
      
          <Link className="text-white mx-2" to="/about">About</Link>
   
        </Nav>
        
      </Navbar>
    )
   }

myNavbar.defaultProps = {
  title: 'Github Finder'
};

myNavbar.propTypes ={
  title: PropTypes.string.isRequired,
}

export default myNavbar;