import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineMail } from 'react-icons/ai';

export default function App() {
  return (
    <MDBFooter className="footer text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <VscLocation size={30} />
            </MDBCol>
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p className="pt-2">
                CMC MICHAEL NEXT TO CIVIL SERVICE NOC BUILDING
              </p>
            </MDBCol>

            <MDBCol md="5" size="12" className="mb-4 mb-md-0">
              <p className="pt-2">DAN ENERGY ETHIOPIA</p>
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <AiOutlineMail size={20} />
            </MDBCol>

            <MDBCol size="auto" className="mb-4 mb-md-0">
              <p>DANEXAMPLE@ETHIONET.ET</p>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        &copy; {new Date().getFullYear()} Copyright :{' '}
        <a className="text-white" href="https://danenergyethiopia.com/">
          SWIFT Autostore . All Rights Reserved. Designed by DAN ENERGY ETHIOPIA
        </a>
      </div>
    </MDBFooter>
  );
}
