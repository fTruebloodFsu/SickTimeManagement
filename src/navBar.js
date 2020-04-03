import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {  Link } from 'react-router-dom';
import Time from './clock.js'

function MyNavBar(target){

  const navStyle = {
    color: 'black'
  };

    return (
      <nav>
          <ul className='nav-Link'>
            <Link style={navStyle} to='/'>
              <li >LC Sick Time</li>
            </Link>
            <Link style={navStyle} to='/request'>
              <li>Request</li>
            </Link>
            <Link style={navStyle} to='/check'>
              <li>Check</li>
            </Link>
            <Link style={navStyle} to='/stats'>
              <li>stats</li>
            </Link>
            <li style={navStyle}><Time /></li>
          </ul>
      </nav>
      // <div>
      //   <Router>
      //   <Navbar color="light" light expand="md">
      //     <NavbarBrand><RRNavLink style={{color: 'grey'}} to='/'>LC Sick Time</RRNavLink></NavbarBrand>
      //     <NavbarToggler onClick={toggle} />
      //     <Collapse isOpen={isOpen} navbar>
      //       <Nav className="mr-auto" navbar>
      //         <NavItem>
      //           <NavLink ><RRNavLink style={{color: 'grey'}} to='/request'>Request Sick Time</RRNavLink></NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink ><RRNavLink style={{color: 'grey'}} to='/check'>Check Sick Time</RRNavLink></NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink><RRNavLink style={{color: 'grey'}} to='/stats'>Sick Time Stats</RRNavLink></NavLink>
      //         </NavItem>
      //       </Nav>
      //       <NavbarText><Time /></NavbarText>
      //     </Collapse>
      //   </Navbar>
      //   </Router>
      // </div>
    );
  }
  
  export default MyNavBar;