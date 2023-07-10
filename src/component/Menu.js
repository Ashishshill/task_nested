import React from 'react'
import {Container, Nav, Navbar, NavDropdown, NavLink} from 'react-bootstrap'
import menuData from '../data.json'

function Menu() {

    function MenuItem({ title, link, submenu}){
        if(submenu){
            return(
                <NavDropdown title={title} id="basic-nav-dropdown">
                   {
                    submenu.map((item)=> (
                        <MenuItem key={item.title} title={item.title} link={item.link} submenu={item.submenu}/>
                    ))
                   } 
                </NavDropdown>
            )
        } else {
            return(
                <NavLink href={link}>{title}</NavLink>
            )
        }
    }
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            {
                menuData.menu.map((item) => (
                    <MenuItem key={item.title} title={item.title} link={item.link} submenu={item.submenu}/>
                ))
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu