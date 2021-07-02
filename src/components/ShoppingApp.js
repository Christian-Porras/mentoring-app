import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import ShoppingListContainer from '../containers/ShoppingListContainer';
import ListForm from './ListForm';

const ShoppingApp = () => {
  const [value, setValue] = useState('');

  return(
    <Row>
      <Col xs={6}>
        <ListForm setValue={setValue} value={value}/>
      </Col>
      <Col xs={6}>
        <ShoppingListContainer name={value}/>
      </Col>
    </Row>
  );
}

export default ShoppingApp;
