import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap'

import { useContext, useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import { Store } from './Store';

export  function ProductDetail(){
    const navigate = useNavigate()
const {id} = useParams()
const [product, setProduct] = useState({})
const {state, dispatch: ctxdispatch} = useContext(Store)
const { cart } = state;
useEffect(()=>{
    
    const promise1 =fetch('http://localhost:5000/products',{method:"GET"})
    promise1.then(res=>{
      const promise2 = promise1.then(res=>{
      const promise2 =res.json()
      promise2.then(Products=>{Products.forEach(element => {
   if(element.id==id){
       setProduct(element)
      console.log(element)
     }
      });})
    
    })})
    
  },[id])

const addToCartHandler = ()=>{
  const existItem = cart.cartItems.find((x) => x._id === product._id);
  const quantity = existItem ? existItem.quantity + 1 : 1;
 //make ajax req to chek quantity in stock
  if (product.quantity < quantity) {
    window.alert('Sorry. Product is out of stock');
    return;
  }
    ctxdispatch({
        type:'ADD-TO-CART',
        payload: { ...product, quantity },
    })
   navigate(`/signin?redirect=/cart`)
}
    return(
        <div className='mt-5'>
    
    <Row>
        <Col md={6}>
   
          <img
          style={{width:200,height:300}}
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
             <h1>{product.name}</h1>
         
          
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>Pirce : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.production}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.quantity > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.quantity > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
    )
}