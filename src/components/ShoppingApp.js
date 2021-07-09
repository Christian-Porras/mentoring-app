import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import ShoppingListContainer from '../containers/ShoppingListContainer';
import ListForm from './ListForm';

const ShoppingApp = () => {
  const [name, setName] = useState('');
  const [item, setItem] = useState('');
  const [perishable, setPerishable] = useState('');

  const onSubmit = (values) => {
    setName(values.name);
    setItem(values.item);
    console.log(values.perishable);
    setPerishable(values.perishable);
  }

  return(
    <Row>
      <Col xs={6}>
        <ListForm name={name} item={item} onSubmit={onSubmit}/>
      </Col>
      <Col xs={6}>
        <ShoppingListContainer name={name} item={item} perishable={perishable}/>
      </Col>
    </Row>
  );
}

export default ShoppingApp;
