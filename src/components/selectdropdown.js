import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownButton(props) {
  return props.list.length > 0 ? (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        split="true"
        style={{
          backgroundColor: '#2F5E78',
          marginTop: 15,
          fontFamily: 'Times New Roman',
          marginLeft: '0.5rem',
          borderRadius: 10,
          width: '22rem',
          height: '3rem',
          fontSize: '1rem',
          borderColor: 'pink',
          aligniIems: 'content-end',
        }}
      >
        {props.title}{' '}
      </Dropdown.Toggle>

      <Dropdown.Menu style={dropdownStyles}>
        {props.list.map((l, i) => (
          <Dropdown.Item
            key={i}
            id="dropdown-size-small"
            onClick={() => props.onChange(i)}
            href="#/action-1"
          >
            {l}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <></>
  );
}
const dropdownStyles = {
  backgroundColor: '#D9D9D9',
  width: 279,
  marginTop: 3,
};
export default DropdownButton;
