import { useEffect } from "react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Customers() {
const[myClients,setClients] = useState([])


useEffect(()=>{

  const promise1 =fetch('http://localhost:5000/clients',{method:"GET"})
  promise1.then(res=>{
    const promise2 = promise1.then(res=>{
    const promise2 =res.json()
    promise2.then(clients=>{clients.forEach(element => {
      console.log(element.name)
      setClients(clients)
    });})
  
  })})
  

},[])


    return (
    <Container className="lefta">
      <Row>
        {/* <Col sm={3}> <Sidebar></Sidebar></Col> */}
        <Col sm={9}><div class="  justify-content-md-center bg-light mb-2">
      <h1>Customers List</h1>
    </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Company</th>
    </tr>
  </thead>
  <tbody>
  {

    myClients.map(client=>(
      <tr key={client.id}>
      <th scope="row">{client.id}</th>
      <td>{client.name}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td>{client.gender}</td>
      <td>{client.company}</td>
    </tr>
    ))
  }
   
  </tbody>
</table></Col>
      </Row>

    </Container>
 
   

   
    ); 
  }
  
  export default Customers;
  
