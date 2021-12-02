import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";



export default function NavBar_1() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" >
            <Container fluid className="mx-5 px-5">
                <Navbar.Brand href="#home">Containers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Ready to Ship</Nav.Link>
                        <Nav.Link href="#pricing">Personel Protective E..</Nav.Link>
                        <Nav.Link href="#pricing">Trade Shows</Nav.Link>
                        <NavDropdown title="Buyer Central" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Trade Assurance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Letter of Credit</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sell on Alibaba" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">For Global Seller</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">For Chinese Seller</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Partner Program</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Help" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">For BUyers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">For Suppliers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Submit a Dispute</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Report IPR Infringement</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Report Abuse</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Get the App</Nav.Link>
                        <Nav.Link href="#">English-PKR</Nav.Link>
                        <Nav.Link href="#">Ship to:</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}