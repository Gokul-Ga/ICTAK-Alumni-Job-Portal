import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css"
import Login from "../employer/Login";


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#3B71DA"}}>
      <Navbar.Brand href="#home">{<img className="ict-logo" src="https://pbs.twimg.com/profile_images/478027753757736960/YtHWZU8j.png" alt="ict logo"></img>}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link  style={{color:'white', fontSize:'20px'}} href="/"><b>ICTAK Job Alumni Portal</b></Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link   href="/">Home</Nav.Link>
        <NavDropdown  title="Login" id="basic-nav-dropdown "  >
              <NavDropdown.Item href="#admin">Login as Admin</NavDropdown.Item>
              <NavDropdown.Item href='./Login'>
                Login as Employer
              </NavDropdown.Item>
              <NavDropdown.Item    href="#loginalumini">Login As Alumni</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            {/* <Nav.Link href="#sign">Sign Up</Nav.Link> */}
            <NavDropdown title="Signup" id="basic-nav-dropdown " style={{ marginRight: '100px' }}>
              <NavDropdown.Item href="#admin">Signup as Alumni</NavDropdown.Item>
              <NavDropdown.Item href='./Signup'>
                Signup as Employer
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;