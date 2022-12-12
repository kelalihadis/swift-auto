import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  Form  from "react-bootstrap/Form";
//import Birr from "../assets/images/birr.jpg"
function Price(){
    return(
      
<Form>
  <Form.Group className="mb-3" controlId="formBasicPrice" >
    <Form.Control className="priceplace" style = {styling} type="number" placeholder="ENTER PRICE" />
    {/* <div className="birr-icon">
          <img style={{height:'2.8rem',width:'2.8rem',marginLeft:'11rem'}} alt ="birr icon"src={Birr}/>
        </div> */}
   </Form.Group>
</Form>
    )
}
const styling = {

  maxWidth: '28rem',
  color:'white',
  width:'100%',
  height:'3.5rem',
  backgroundColor: '#2F5E78',
  borderRadius:'0.8rem',
  marginLeft:'-6rem',
  textAlign:"center",
  fontFamily: 'Times New Roman',
};

export default Price
