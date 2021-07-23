import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired
}

const defaultProps = {

}

const ShoppingList = ({name, list}) => {
  const [checked, setChecked] = useState(0);

  const handleCheck = (event) => {
    let aux = checked;

    if (event.target.checked) {
      aux += 1;
    } else {
      aux -= 1;
    }

    setChecked(aux);
  }

  const renderList = (shoppingList) => {
    return shoppingList.map((item) => {
      return (
        <div key={item.name}>
          <input type="checkbox" key={`${item.name}-input`} onChange={handleCheck} />
          <label key={`${item.name}-label`}> {item.name} </label>
        </div>
      );
    });
  }

  return (
    <div className="shopping-list">
      <h1>Shopping List for {name}</h1>
      <div>
        {renderList(list)}
      </div>

      <span> We have a perishable item?
        {
          list.find(item => {
            return item.perishable === "true"
          }) ? " yes" : " no"
        }
      </span>
      <br/>
      <span> Items in cart: {checked}/{list.length} </span>
    </div>
  )
}

ShoppingList.propTypes = propTypes;
ShoppingList.defaultProps = defaultProps;

export default ShoppingList;
