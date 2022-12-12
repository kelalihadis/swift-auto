
import { useEffect } from "react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export function AdminProduct(){
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
    return(
        <Container className="lefta">
        <Row>
          {/* <Col sm={3}> <Sidebar></Sidebar></Col> */}
          <Col sm={9}>

     <div class="row justify-content-md-center">
     <h1>Products</h1>
     
     {/* <div className="m-1">  <input class="form-control" id="myInput" type="text" placeholder="Search Product"/></div>   */}
     
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 bg-light">
  <button class="btn btn-primary me-md-2" type="button">Add Product</button>
</div>
 <table className="table">
     <thead>
      <tr>
        <th scope="col">#</th>
         <th scope="col">Name</th>        
          <th scope="col">Image</th>          
          <th scope="col">Product</th>
          <th scope="col">price USD$</th>          
           <th scope="col">Quantity</th>
          <th scope="col">Category</th>
      <th scope="col">Brand</th>
         <th scope="col">Edit/Drop</th>
       </tr>
     </thead>
     <tbody>
      {
    
        myProducts.map(client=>(
          <tr key={client.id}>
          <th scope="row">{client.id}</th>
          <td>{client.name}</td>
          <td><img src={client.image} alt="" /></td>
          <td>{client.production}</td>
          <td>{client.price}</td>
          <td>{client.quantity}</td>
          <td>{client.catagory}</td>
          <td>{client.brand}</td>
          <td>
            <i class="bi bi-pencil m-1 p-1 bg-success"></i>
            <i class="bi bi-trash m-1 p-1 bg-danger"></i>
          </td>
        </tr>
        ))}
      </tbody>
    </table>

  </Col>
 </Row>
</Container>
    )
}