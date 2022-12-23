import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  return (
    <div>
      <>
        <Navbar bg="info" className="navbar-light" variant="light">
          <Container>
            <Navbar.Brand href="/" className="text-bold ">
              Ode To Code
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Home;
