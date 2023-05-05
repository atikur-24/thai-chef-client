import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const TopNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("this is ueser ----->", user);

  const handleLogout = () => {
    logOut().then(() =>{}).catch(error => {console.error(error)})
  }

  return (
    <div className="bg-light">
      <Container>
      <Navbar expand="lg" className="py-4">
        <Navbar.Brand style={{fontSize: '1.6rem'}} className="fw-bold">Thai Kitchen <span className="my-color">Chronicles</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <span>
            <NavLink className={({ isActive }) => isActive ? "active text-decoration-none" : "default text-decoration-none me-4" } to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active text-decoration-none" : "default text-decoration-none ms-4"} to="/blog">Blog</NavLink>
            </span>
          </Nav>
          <Nav>
          {user && <img title={user?.displayName} style={{height: '40px'}} className="rounded-circle" src={user?.photoURL} alt="profile" />}

            { user ? <Link onClick={ handleLogout } className="my-button py-2 fw-semibold ms-3">Logout</Link>
            : <Link to='/login' className="my-button py-2 fw-semibold ms-3">Login</Link> }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </div>
  );
};

export default TopNavbar;
