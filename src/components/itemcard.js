import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import alternatorpic from '../assets/images/alternator.png';
import data from '../data';
export default function CardContainer() {
  return (
    <div className='items'>
    
       { 

        data.myitems.map(myitem => (   
        <Card   className="text-center" style={{width:'13rem',marginLeft:'1rem',marginRight:'1rem',border:'4px solid #2F5E78',borderRadius:10}}>  
        <Card.Img className='productimg' variant='top' alt={myitem.name} src={myitem.image}/>
       
          <Card.Body>
          <Card.Title Color='#2F5E78'>
             <p>{myitem.name}</p>
          </Card.Title>
         <Card.Text>
              <p>{myitem.price}$</p>
          
          </Card.Text>
          <Button style={{backgroundColor:"#2F5E78",width:"100%",borderRadius:7 }}>Edit Item</Button>
          </Card.Body>
         
         
        
        
    </Card>
        ))
       }

</div>
  )}
