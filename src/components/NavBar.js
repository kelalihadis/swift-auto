// import React, { useState } from 'react';
// import Image from 'react-bootstrap/Image';
// import logo from '../images/logo.png';
// import { FiLogOut } from 'react-icons/fi';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse,
//   MDBIcon,
//   MDBNavbarNav,
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showNavCentred, setShowNavCentred] = useState(false);

//   return (
//     <>
//       <MDBNavbar expand="lg" light bgColor="light">
//         <MDBContainer fluid>
         
//           <MDBNavbarBrand
//             className="green"
//             style={{ color: '#2F5F78', fontSize: '2rem' }}
//             href="/"
//           >
//              <Image className="img" src={logo} alt="icon" />
//             Swift Auto
//           </MDBNavbarBrand>
//           <MDBNavbarToggler
//             type="button"
//             data-target="#navbarCenteredExample"
//             aria-controls="navbarCenteredExample"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setShowNavCentred(!showNavCentred)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>
//           <MDBCollapse
//             navbar
//             show={showNavCentred}
//             center='true'
//             className="justify-content-end"
//           >
//             <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0">
//               <MDBNavbarItem >
//                 <MDBNavbarLink aria-current="page" href="/">
//                   HOME
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/myitems">MY ITEMS</MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink style={{paddingRight:'34rem'}}  href="#">ABOUT US</MDBNavbarLink>
//               </MDBNavbarItem>
              
//               <MDBNavbarItem >
//                 <MDBNavbarLink href="#">
//                   <FiLogOut className='logout' size={'2rem'} style={{marginLeft:''}} />
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// }
