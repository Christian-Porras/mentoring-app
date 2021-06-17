import React, {useState} from 'react';
import ShoppingListContainer from '../containers/ShoppingListContainer';
import ListForm from './ListForm';

const ShoppingApp = () => {
  const [value, setValue] = useState('');

  return(
    <div>
      <ListForm setValue={setValue} value={value}/>
      <ShoppingListContainer name={value}/>
    </div>
  );
}

export default ShoppingApp;
