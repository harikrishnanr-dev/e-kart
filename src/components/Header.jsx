import React from "react";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  //useSelector hook is 
  const wishlist = useSelector((state) => state.wishlistReducer)
  console.log(wishlist)
  const cart = useSelector ((state)=> state.cartReducer)
    return (
        <>
            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <i class="fa-solid fa-cart-shopping fa-bounce me-2" style={{color: '#FFD43B'}}></i>
                    <Navbar.Brand href="/" className="text-white"> React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                            <Nav.Link><Link to={'/cart'} style={{ color: 'white', textDecoration: 'none' }}>
                                Cart
                  <Badge className='ms-3' bg="secondary">{cart?.length }</Badge></Link></Nav.Link>
                            <Nav.Link><Link to={'/wishlist'} style={{ color: 'white', textDecoration: 'none' }}>
                                Wishlist
                                <Badge className='ms-3' bg="secondary">{wishlist?.length }</Badge>
                            </Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
  )
}

export default Header;
