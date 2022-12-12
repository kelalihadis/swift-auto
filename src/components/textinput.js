import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
function Text() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          className="place"
          style={styling}
          type="text"
          placeholder="ENTER PART NAME"
        />
      </Form.Group>
    </Form>
  );
}
const styling = {
  backgroundColor: 'red',
  maxWidth: '28rem',
  width: '100%',
  height: 55,
  borderRadius: 10,
  textAlign: 'center',
  fontFamily: 'Times New Roman',
  marginTop: '2rem',
  color: 'white',
};

export default Text;
