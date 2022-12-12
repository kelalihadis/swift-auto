import React, { useState } from 'react';

import DropdownButton from '../components/selectdropdown';
//import Selectcategorydrop from '../components/selectcategory';
import Text from '../components/textinput';
import Description from '../components/textdescription';
import ButtonAdd from '../components/button';

import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from '../components/uploadimage';
import Price from '../components/price';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../data.json';
function Home(props) {
  // const [vdata, setvData] = useState(data);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedType, setSelectedType] = useState(0);
  const changeBrand = (ind) => {
    setSelectedBrand(ind);
    setIsSelected(true);
  };
  const changeModel = (ind) => {
    setSelectedModel(ind);
  };
  const changeType = (ind) => {
    setSelectedType(ind);
  };
  return (
    <div className="maindiv">
      <Container>
        <Row
          className="justify-content-center"
          xs={'auto'}
          md={'auto'}
          lg={'auto'}
        >
          {/* this will be changed */}
          <Col sm="true">
            <DropdownButton
              key={0}
              onChange={changeBrand}
              title={
                isSelected ? data.data[selectedBrand].brand : 'Select Maker'
              }
              list={data.data.map((d) => d.brand)}
            />
          </Col>
          <Col sm="true">
            <DropdownButton
              key={1}
              onChange={changeModel}
              title={
                isSelected
                  ? data.data[selectedBrand].models[selectedModel].model
                  : 'Select Model'
              }
              list={data.data[selectedBrand].models.map((d) => d.model)}
            />
          </Col>
          <Col sm="true">
            <DropdownButton
              key={2}
              onChange={changeType}
              title={
                isSelected
                  ? data.data[selectedBrand].models[selectedModel].types[
                      selectedType
                    ]
                  : 'Select Type'
              }
              list={data.data[selectedBrand].models[selectedModel].types}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row xs={'auto'} md={'auto'} lg={2}>
          <Col sm="true">
            <Text />
          </Col>
          <Col sm="true">
            <Upload className="uploadimages" />
          </Col>
          <Col sm="true">
            <Description />
          </Col>
          <Col sm="true" className="price">
            <Price />
          </Col>

          <Col sm="true">
            <ButtonAdd />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
