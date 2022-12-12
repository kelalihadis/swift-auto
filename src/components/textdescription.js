import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
//import { color } from '@mui/system';
//import { withTheme } from 'styled-components';
import { red } from '@mui/material/colors';
function Description() {
  return (
    <Form className="description">
      <Form.Group
        style={{ border: '3px dotted 70E304' }}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Control
          className="place"
          style={styling}
          type="text"
          placeholder="ENTER PART DESCRIPTION"
        />
      </Form.Group>
    </Form>
  );
}
const styling = {
  color: 'white',
  backgroundColor: 'pink',
  maxWidth: '28rem',
  Width: '100%',
  height: '8rem',
  borderRadius: 10,
  textAlign: 'center',
  fontFamily: 'Times New Roman',
  marginTop: '-12rem',
};

export default Description;
