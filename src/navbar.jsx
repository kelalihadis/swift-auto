import { Modal } from "./modal"
import {Link} from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from "react"
import { Store } from "./Store"


export function NavBar (){
  const {state, dispatch} = useContext(Store)
    const {
        cart, userInfo
      } = state;
  const signoutHandler =(e)=>{
     e.preventDefault()
    dispatch({type:'USER-SIGN-OUT'})
    localStorage.removeItem('user');
    window.location.href = '/signin';
  }
    return(
      <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container-fluid">
  <a className="navbar-brand" href="/">DAN Energy</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact</a>
      </li>
                 <Nav className="me-auto  w-100  justify-content-end">
          <Link to="/signin?redirect=/cart" className="nav-link">
            Cart
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
          {userInfo ? (
           
            <NavDropdown title={state.userInfo.email} id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item>User Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/orderhistory">
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <Link
                className="dropdown-item"
                to="#signout"
                onClick={signoutHandler}
              >
                Sign Out
              </Link>
            </NavDropdown>
        
          ) : (
            <Link style={{color:'white'}} className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
          {userInfo && userInfo.isAdmin && (
            <NavDropdown title="Admin" id="admin-nav-dropdown">
              <LinkContainer to="/admin/dashboard">
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/products">
                <NavDropdown.Item>Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/orders">
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/users">
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
        </Nav>

    </ul>
  {/* <div className="m-1">  <input class="form-control" id="myInput" type="text" placeholder="Search.."/></div> */}
    
    {/* <Modal /> */}
  </div>

</div>
</nav>
      </header>

    )
}