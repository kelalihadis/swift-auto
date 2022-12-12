import sidebar from"./sidebar.css"
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { NewOne } from "./new";
export function Products(){
    const[myProducts,setProducts] = useState([])


    useEffect(()=>{
    
      const promise1 =fetch('http://localhost:5000/products',{method:"GET"})
      promise1.then(res=>{
        const promise2 = promise1.then(res=>{
        const promise2 =res.json()
        promise2.then(Products=>{Products.forEach(element => {
          console.log(element.name)
          setProducts(Products)
        });})
      
      })})
      
    
    },[])
    
    
        return (
         
//       <>
//       <div class="row justify-content-md-center">
      // <h1>Products</h1>
//       <div className="m-1">  <input class="form-control" id="myInput" type="text" placeholder="Search Product"/></div>
//     </div>
//       <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 bg-light">
//   <button class="btn btn-primary me-md-2" type="button">Add Product</button>
// </div>
//           <table className="table">
//       <thead>
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Name</th>
//           <th scope="col">Image</th>
//           <th scope="col">Product</th>
//           <th scope="col">price USD$</th>
//           <th scope="col">Quantity</th>
//           <th scope="col">Category</th>
//           <th scope="col">Brand</th>
//           <th scope="col">Edit/Drop</th>
//         </tr>
//       </thead>
//       <tbody>
//       {
    
//         myProducts.map(client=>(
//           <tr key={client.id}>
//           <th scope="row">{client.id}</th>
//           <td>{client.name}</td>
//           <td><img src={client.image} alt="" /></td>
//           <td>{client.production}</td>
//           <td>{client.price}</td>
//           <td>{client.quantity}</td>
//           <td>{client.catagory}</td>
//           <td>{client.brand}</td>
//           <td>
//             <i class="bi bi-pencil m-1 p-1 bg-success"></i>
//             <i class="bi bi-trash m-1 p-1 bg-danger"></i>
//           </td>
//         </tr>
//         ))
//       }
//       </tbody>
//     </table>
//      </>
   <>   
    
<Helmet><title>products</title></Helmet>
    <h1 className="bg-light">Products List</h1>
<div class="row row-cols-1 row-cols-md-2 g-4">

{myProducts.map(client=>(
<div class="col">
<div class="card  text-center">
<div class="card-header">
  {client.production}
</div>
<div class="card-body">
<a href={`/products/${client.id}`}> <h5 class="card-title">{client.name}</h5></a>
  <p class="card-text"><img src={client.image} alt="" /><br></br>
  Here is Product description</p>
  <a href="#" class="btn btn-secondary bg-dark">Add to Cart</a>
</div>
<div class="card-footer text-muted">
  2 days ago
</div>
</div>
</div>))}
</div>
</>       ); 
     
}




//     <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side">
//     <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//       {/* <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
//       <span class="fs-4">Sidebar</span>
//     </a>
//     <hr />
//     <ul class="nav nav-pills flex-column mb-auto">
//       <li class="nav-item">
//         <a href="#" class="nav-link active" aria-current="page">
//           {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
//           Home
//         </a>
//       </li>
//       <li>
//         <a href="#" class="nav-link text-white">
//           {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
//           Dashboard
//         </a>
//       </li>
//       <li>
//         <a href="#" class="nav-link text-white">
//           {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
//           Orders
//         </a>
//       </li>
//       <li>
//         <a href="#" class="nav-link text-white">
//           {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
//           Products
//         </a>
//       </li>
//       <li>
//         <a href="#" class="nav-link text-white">
//           {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
//           Customers
//         </a>
//       </li>
//     </ul>
//     <hr />
//     <div class="dropdown">
//       <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//         {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" /> */}
//         <strong>mdo</strong>
//       </a>
//       <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
//         <li><a class="dropdown-item" href="#">New project...</a></li>
//         <li><a class="dropdown-item" href="#">Settings</a></li>
//         <li><a class="dropdown-item" href="#">Profile</a></li>
//         <li><hr class="dropdown-divider" /></li>
//         <li><a class="dropdown-item" href="#">Sign out</a></li>
//       </ul>
//     </div>
//   </div>