import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import ShoppingListContainer from '../containers/ShoppingListContainer';
import ListForm from './ListForm';

const ShoppingApp = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const onSubmit = (values) => {
    setName(values.name);
    setItems(values.items);
  }

  return(
    <Row>
      <Col xs={6}>
        <ListForm name={name} items={items} onSubmit={onSubmit}/>
      </Col>
      <Col xs={6}>
        <ShoppingListContainer name={name} items={items}/>
      </Col>
    </Row>
  );
}

export default ShoppingApp;
