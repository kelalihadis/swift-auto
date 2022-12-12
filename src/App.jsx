//  import React,{Fragment} from "react";
//  import {Switch} from "react-router"
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { NavBar } from "./navbar";
 import { NoPage } from "./NoPage";

import { Login } from "./Login";
import Customers from "./customers";
import { Products } from "./products";
import { Admin } from "./AdminDashboard";
import { Product, ProductDetail } from "./Product";
import Register from "./Register";
import { Cart } from "./Cart";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Store } from "./Store";

// from navbar
import { Modal } from "./modal"
import {Link} from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import { AdminProduct } from "./AdminProduct";
import ProtectedRoute from "./protectedRoute";
import AdminRoute from "./adminroute";
import { Sidebar } from "./Sidebar";

// from old App.js
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import Myitems from './pages/myitems';
//import NavIcon from './components/NaVIcon';
import Footer from './Footer';
import SearchBox from "./searchBox";
import SearchScreen from "./searchScreen";

//import NavBar from './components/NavBar';

 
export function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, cart, userInfo } = state;
  const signoutHandler =(e)=>{
    e.preventDefault()
    ctxDispatch({type:'USER-SIGN-OUT'})
   localStorage.removeItem('user');
   window.location.href = '/signin';
 } 
 useEffect(() => {
  const fetchproducts = async () => {
 
    const promise1 = await  fetch('http://localhost:5000/products',{method:"GET"})
    const data  = await promise1.json();
    const uniqueCat = [...new Set(data.map(item => item.catagory))];
      // setproducts(data);
      setCategories(uniqueCat);

  };
  fetchproducts();
}, []);

// console.log(products)
// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = [...new Set(ages)]

// console.log(ages)
// console.log(uniqueAges)
// console.log(ages)
// const array = [{
//   "name": "Joe",
//   "age": 17
// },
// {
//   "name": "Bob",
//   "age": 17
// },
// {
//   "name": "Carl",
//   "age": 35
// }
// ]
// const unique = [...new Set(array.map(item => item.age))];
// console.log(unique)
    return (
  <BrowserRouter>
  <div    className={
          sidebarIsOpen
            ? fullBox
              ? 'site-container active-cont d-flex flex-column full-box'
              : 'site-container active-cont d-flex flex-column'
            : fullBox
            ? 'site-container d-flex flex-column full-box'
            : 'site-container d-flex flex-column'
        }>
  <header>
   <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
   <Button
         variant="dark"
         onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
        <i className="fas fa-bars"></i>
    </Button>
<div className="container-fluid">
  <a className="navbar-brand" href="/">DAN Energy</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
    <i className="fas fa-bars"></i>
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

                 {/* <div className="m-2">  <input class="form-control" id="myInput" type="text" placeholder="Search Product"/></div>  */}
            <SearchBox />
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
                    {userInfo && userInfo.isVendor && (
            <NavDropdown title="Vendor" id="admin-nav-dropdown">
              <LinkContainer to="/vendor">
                <NavDropdown.Item>Vendor</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/myitems">
                <NavDropdown.Item>My Items</NavDropdown.Item>
              </LinkContainer>
              {/* <LinkContainer to="/admin/orders">
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/users">
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer> */}
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
      <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Catagories</strong>
            </Nav.Item>
            {/* {products.map((Product) => (
              <Nav.Item key={Product.id}>
                <LinkContainer
                to={'/'}
                  // to={`/search?Product=${Product.catagory}`}
                  // onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{Product.catagory}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))} */}

{categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer 
                to="/"
                  //  to={`/search?category=${category}`}
                  // onClick={() => setSidebarIsOpen(false)}
                  >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}

          </Nav>
        </div>
       
     <main>
     <Routes>
     <Route
              path="/vendor"
              exact
              element={
                <Home
                  title="SELECT MAKER"
                  titletwo="SELECT MODEL "
                  titlethree="SELECT CATAGORY "
                  titlefour="SELECT YEAR "
                />
              }
            />
            <Route path="/myitems" element={<Myitems />} />
       <Route path="/products/:id"  element={<ProductDetail />}/>
       <Route path="/signin" exact element={<Login auth={false}/>}/>
       <Route path="/admin/dashboard" exact element={<AdminRoute><Admin /></AdminRoute>}/>
       <Route path="/admin/customers" exact element={<AdminRoute><Customers /></AdminRoute>}/>
       <Route path="/admin/products" exact element={<AdminRoute><AdminProduct /></AdminRoute>}/>
       <Route path="/" exact element={<Products  />}/>
       <Route path="/cart" exact element={<ProtectedRoute><Cart  /></ProtectedRoute>}/>
       <Route path="/register" exact element={<Register  />}/>
       {/* <Route path="/search" element={<SearchScreen />} /> */}
       <Route path="*"  element={<NoPage />}/>
       </Routes> 
     </main>
     <Footer></Footer>
     </div>
</BrowserRouter>

    ); 
  }
  

  // React js Tutorial
  // by smart system solutions

//   OR 
// React Js Full Ecommerce site (MERN) full Stack React.js Node from Scratch