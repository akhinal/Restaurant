import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar className="bg-light">
        <Container>
          <Navbar.Brand href="#home">
          <p style={{marginLeft:'-30vh'}} ><i class="fa-3x  fa-solid fa-pizza-slice fa-bounce"></i>
          <strong className='fs-4 ms-5 text-danger'>Restaurant</strong>
          </p>
          
          
          </Navbar.Brand>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default Header