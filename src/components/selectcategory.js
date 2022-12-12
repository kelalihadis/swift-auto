import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Selectcategorydrop(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        split="true"
        style={{
          border: '3px dotted 70E304',
          backgroundColor: '#2F5E78',
          marginTop: 35,
          marginLeft: 90,
          borderRadius: 10,
          width: 400,
          height: 50,
          fontSize: 20,
        }}
      >
        {props.title}{' '}
      </Dropdown.Toggle>

      <Dropdown.Menu style={selectcategorystyle}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    //<Button variant="primary"  style={{ backgroundColor: "#2F5E78" ,border:"#2F5E78",borderRadius:"5px"}}>Primary</Button>
  );
}
const selectcategorystyle = {
  backgroundColor: '#D9D9D9',
  marginTop: 3,
};
export default Selectcategorydrop;
