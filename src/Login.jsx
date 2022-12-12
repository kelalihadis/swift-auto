
import { useState, useEffect, useContext } from "react"
import {  Link, useLocation, useNavigate } from "react-router-dom"; 

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Store } from "./Store";

                      

export function Login(props){
 
  const {search} = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl: '/'
  const navigate = useNavigate()
  const {state, dispatch: ctxdispatch} = useContext(Store)
 const {userInfo}= state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
 //sek
const [client, setClients] = useState([])

// async function fecthUser (){
  
//   const promise1 = await  fetch('http://localhost:5000/clients',{method:"GET"})
//   const data  = await promise1.json();
//    setClients(data);
// }

// useEffect(()=>{
//   const user = client.find(u=>u.email === email && u.password===password);
//   console.log(!user);
//   if(user){
    
//       ctxdispatch({
//             type:'USER-SIGNIN',
//             payload: user
//           })
//           localStorage.setItem('user', JSON.stringify(user));
//           navigate(redirect || '/');
//           return
//     }

//  else{
//    navigate('/signin')//to signin
//     // setMessage('Invalid Email Or Password')
//   }


// },[client])


//end sek
const handleSubmit = async(e)=>{
  e.preventDefault()
//  await fecthUser()

  const promise1 = await  fetch('http://localhost:5000/clients',{method:"GET"})
  const data  = await promise1.json();
  const user = data.find(u=>u.email === email && u.password===password);

  if(user){
    
      ctxdispatch({
            type:'USER-SIGNIN',
            payload: user
          })
          localStorage.setItem('user', JSON.stringify(user));
          navigate(redirect || '/');
          
    }
    
 else{
   navigate('/signin')//to signin
    setMessage('Invalid Email Or Password')
  }
}

useEffect(() => {
  if (userInfo) {
    navigate(redirect);
  }
}, [navigate, redirect, userInfo]);
  // return(
     
  //   <form onSubmit={handleSubmit}>
  //   {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
  //   <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
  //   <div className="form-floating">
  //     <input onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
  //     <label htmlFor="floatingInput">Email address</label>
  //   </div>
  //   <div className="form-floating">
  //     <input  onChange={(e)=>{setPassword(e.target.value)}}  name="pasword" value={password}  type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  //     <label htmlFor="floatingPassword">Password</label>
  //   </div>
  
  //   <div className="checkbox mb-3">
  //     <label>
  //       <input type="checkbox" value="remember-me" /> Remember me
  //     </label>
  //   </div>
  //   <Link to={`/register?redirect=${redirect}`}>Create New Account</Link>
  //   <button  className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  
  //   <p className="mt-5 mb-3 text-muted">©2022</p>
  // </form>

  // );


  return (
    <MDBContainer style={{width:'60%'}} className=" logpage my-3">
     
      <MDBCard>
        <MDBRow className='g-0'>
        <h1 className="text-center">Login</h1>
          <MDBCol md='6'>
            <MDBCardImage src={require('./images/dan.jpg')} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
               {/* modified */}
               <MDBCol md='6'>
            <MDBCardImage src={require('./images/logo.png')} alt="login form" className='rounded-start w-100'/>
           
          </MDBCol>

              <h5 className="fw-normal my-3 pb-2" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput onChange={(e)=>{setEmail(e.target.value)}}  wrapperClass='mb-2' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput onChange={(e)=>{setPassword(e.target.value)}}  wrapperClass='mb-2' label='Password' id='formControlLg' type='password' size="lg"/>
                <span style={{color: 'red'}}>{message}</span>
              <MDBBtn type="submit" onClick={handleSubmit} className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-2 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? 
              <Link style={{color: 'blue',
            textDecoration:'none'}} to={`/register?redirect=${redirect}`}> Register here</Link></p>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
  
}