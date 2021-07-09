import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from "../components/ShoppingList";

const propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  perishable: PropTypes.bool.isRequired
}

const defaultProps = {

}

const ShoppingListContainer = ({name, item, perishable}) => {
  const item_list = [
    'Milk',
    'Eggs',
    'Bacon',
    'Soda'
  ]

  item_list.push(item);

  return (
    <ShoppingList name={name} list={item_list} perishable={perishable}/>
  )
}

ShoppingListContainer.propTypes = propTypes;
ShoppingListContainer.defaultProps = defaultProps;

export default ShoppingListContainer;
