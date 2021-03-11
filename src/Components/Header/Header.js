import { Jumbotron, Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>

            <Navbar bg="transparent" expand="lg" shadow-lg variant="dark">
                <Container>
                    <Navbar.Brand href={"/"}>FIFA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link href={"/Link"}>Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <Jumbotron className="text-center shadow-sm">
                <h1 className="display-1 font-weight-bold" > FIFA 2021  </h1>
            </Jumbotron>
        </>
    );
};

export default Header;