import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div>
      <>
        <Navbar
          style={{
            background: "#003145",
            position: "sticky",
            top: "0",
            zIndex: "10",
          }}
          className="navbar-light"
          variant="light"
        >
          <Container>
            <Navbar.Brand href="/" className="text-bold text-white">
              Ode To Code
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/create" className="text-white">
                Create
              </Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1080x440/?skills"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Prove your skills</h3>
              <p>
                Gain substantial experience by solving real-world problems and
                pit against others to come up with innovative solutions.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1080x440/?ai"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Learn from community</h3>
              <p>
                One can look and analyze the solutions submitted by the other
                Data Scientists in the community and learn from them.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/1080x440/?code"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Challenge yourself</h3>
              <p>
                You will stand out from the crowd if you do well in AI
                challenges, it not only helps you shine in the community but
                also earns rewards.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
      {/* <upcomingTab /> */}
    </div>
  );
}

export default Home;
