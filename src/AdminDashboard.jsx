import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./customers";
import { Login } from "./Login";
import { NoPage } from "./NoPage";
import { ProductDetail } from './Product';
import { Products } from "./products";
import {Sidebar} from "./Sidebar"
function Header(){
    return(
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#"><h2 className="m-0">DAN Energy</h2></a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">Sign out</a>
          </div>
        </div>
      </header>
    )
}

// function Sidebar(){
//     return(
//     )
// }
export function Admin(){
    return(
        <>
      
      {/* <Header></Header> */}


<div class="container-fluid">
  <div class="row">

    {/* <Sidebar></Sidebar> */}
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
   
    <div>DashBoard</div>
     
    </main>

    
  </div>
</div>
         
   </>
    )
       
    
}