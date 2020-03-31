import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Time from './clock.js'
import displayForm from './request.js'
import displayFormCheck from './check.js'
import displayStats from './stats.js'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function MyNavBar(target){
    
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">LC Sick Time</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={displayForm}>Request Sick Time</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={displayFormCheck}>Check Sick Time</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={displayStats}>Sick Time Stats</NavLink>
              </NavItem>
            </Nav>
            <NavbarText><Time /></NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default MyNavBar;