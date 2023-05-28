/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [showEmail, setShowEmail] = useState(false);
  const {user, logOut} = useContext(AuthContext);
  
  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error =>{
      console.log(error);
    })
  }
  const handleMouseEnter = () => {
    setShowEmail(true);
  };

  const handleMouseLeave = () => {
    setShowEmail(false);
  };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='container-fluid header'>
        <Container>
          <Navbar.Brand className='d-flex align-items-center gap-3 '>
              <img className='img rounded-circle' src='https://i.ibb.co/4pwB94P/71-Kfi-Jcub6-S-AC-SL1500.jpg' alt="" />
              <h5 className='text-muted'>Super <span className='text-primary'>Kid</span></h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto  menu">
              <NavLink  to="/" activeclassname="active">Home</NavLink>
              <NavLink  to="/allToys" activeclassname="active">All Toys</NavLink>
              <NavLink  to='/blog' activeclassname="active">
                Blog
              </NavLink>
              
             
            </Nav>
            <Nav className='menu'>
              {user && <><NavLink  to="/addToy" activeclassname="active">Add toy</NavLink>
              <NavLink  to="/myToys" activeclassname="active">My Toys</NavLink></>}

              {user && <div className='icon_person'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <div className='d-flex'><FaUserCircle style={{fontSize: '2rem ', marginRight: '20px'}}></FaUserCircle>{showEmail && <p className='icon_person'>{user.email}</p>}</div>
            </div>}
            
            { user?
              <Button onClick={handleLogOut} variant="secondary">Logout</Button>:
              <Link to ='/login'>
              <Button variant="secondary">Login</Button>
              </Link>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;