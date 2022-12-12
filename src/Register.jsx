import React, { useContext, useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Store } from './Store';
import {Link, useLocation, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userData ={  name, email, password,isAdmin:false,isVendor:false}
  // const [currentUser,setCurrentUser] = useState({})
  const [message, setMessage] = useState('')
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password == '' ||confirmPassword == '' ||name == '' || email == '') {
     setMessage('Please fill all fields')
      return;
    }
    if (password !== confirmPassword) {
     console.log('Passwords do not match');
     setMessage('Passwords do not match')
      return;
    }
    
    const promise1 = await  fetch('http://localhost:5000/clients',{method:"POST", 
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(userData)
    })
    const data  = await promise1.json();
    console.log(data)
    console.log(userInfo)
    ctxDispatch({ type: 'REGISTER', payload: data });
    // ctxDispatch({ type: 'USER_SIGNIN', payload: data });
    localStorage.setItem('user', JSON.stringify(data));
    // setCurrentUser(data)
    console.log(userInfo)
      console.log(data)
      navigate(redirect || '/');
 
  };
// console.log(currentUser)
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <MDBContainer style={{width:'75%'}} className='register' fluid>
      <MDBCard className='text-black m-4' style={{borderRadius: '25px'}}>
          <h1 className="text-center">Register</h1>
      
        <MDBCardBody>
                <MDBRow> <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={require('./images/logo.png')}  fluid/>
            </MDBCol></MDBRow>
          <MDBRow onSubmit={submitHandler}  tag='form' className='g-0'>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              {/* <h2 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h2> */}

              <div className="d-flex flex-row align-items-center mb-2 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput onChange={(e)=>{setName(e.target.value)}} label='Your Name' id='form1' type='text' className='w-00' value={name} required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-2">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput onChange={(e)=>{setEmail(e.target.value)}}  label='Your Email' id='form2' type='email'value={email} required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-2">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput onChange={(e)=>{setPassword(e.target.value)}}  label='Password' id='form3' type='password' value={password} required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-2">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput onChange={(e)=>{setConfirmPassword(e.target.value)}}  label='Repeat your password' id='form4' type='password' value={confirmPassword} required/>
              </div>
              <span style={{color:'red'}}>{message}</span>
                 <div className="mb-3">
          Already have an account?{' '}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>

              <MDBBtn  className='mb-4' size='lg' type='submit'>Register</MDBBtn>

            </MDBCol>
          </MDBRow>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;

