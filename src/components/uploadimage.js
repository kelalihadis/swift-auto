import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Upload() {
  return (
    <div>
      <Card
        border="primary"
        style={{
          marginTop: '2rem',
          width: '30rem',
          height: '12rem',
          backgroundColor: 'rgb(47,94,120,0.3)',
        }}
      >
        {/* <Card.Img variant="top" src="holder.js/100px18/> */}
        <Card.Body>
          <Card.Title></Card.Title>
        </Card.Body>
      </Card>
      
    


      <Button
        style={{
          marginTop: '1rem',
          marginLeft: 125,
          width: '13rem',
          height: '3rem',
          backgroundColor: '#2f5e78',
        }}
        type='file '
      >
        UPLOAD IMAGE
      </Button>
      <input type="file" style={{display:'none'}} /> 
      
    </div>
  );
}

export default Upload;
