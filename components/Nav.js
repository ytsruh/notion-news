import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand className="mx-auto fs-1" href="#home">
            Notion News
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bg="primary" variant="dark">
        <Nav className="mx-auto">
          <Nav.Link href="#link" className="px-2 px-md-5">
            World
          </Nav.Link>
          <Nav.Link href="#home" className="px-2 px-md-5">
            Business
          </Nav.Link>
          <Nav.Link href="#link" className="px-2 px-md-5">
            Sports
          </Nav.Link>
          <Nav.Link href="#link" className="px-2 px-md-5">
            Travel
          </Nav.Link>
          <Nav.Link href="#link" className="px-2 px-md-5">
            Science
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
