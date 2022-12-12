// import React, { useState } from 'react';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'jquery'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import {App} from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import { Admin } from './AdminDashboard';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './Store';
import { NewOne } from './new';
import Practise from './practise';


// from old
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'


// //passing obj as props starts

// function Car(props) {
//   return <h2>I am a { props.brand.model }!</h2>;
// }

// function Garage() {
//   const info = {brand: 'Ford',model:'Mustang'}
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    {/* <Car brand="Ford" /> */}
// 	    <Car brand={info} />
//     </>
//   );
// }
// //passing obj as props ends



// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// function Garage() {
//   const brand = 'Taxi11'
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    {/* <Car brand="Ford" /> */}
// 	    <Car brand={brand} />
//     </>
//   );
// }


// function MissedGoal(){
//   return <h2>Missed</h2>
// }
// function MadeGoal(){
//   return <h2>Goal</h2>
// }
// function Goal(){
//   const isMissed = true
//   if(isMissed)
//   return(
//     <MissedGoal />
//   )
//   else
//   return(
//     <MadeGoal /> 
//   )
// }

// function ShowList(props){
//   return(
//     <li>{props.brand.name}</li>
//   )
// }

// function List(){
//   const names = [{key:1,name:'Kelali'},{key:2,name:'Teka'},{key:3,name:'AlexWang'}]

//   const values = names.map((name,key)=><ShowList key ={key} brand={name}/>)
//   return(
//    <ul>{values}</ul>
//   )
// }

// //Forms
 
// function Form() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// //forms end

// //select 
// function DropDown() {
//  const [myName,setName] = useState('Kelali')
//  const handleChange = (e)=>{
//   setName(e.target.value)
//   console.log(myName)
//  }

//  return(
// <select value={myName} onChange={handleChange}>
//   <option>Teka</option>
//   <option>Alex</option>
//   <option>Fresh</option>
//   <option>Assefa</option>
// </select>
//  )
//   }
// //Text select

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <StoreProvider>
    {/* <Admin></Admin> */}
    <App />
    {/* <NewOne></NewOne> */}
    {/* <Practise></Practise> */}
    </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
