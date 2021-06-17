import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from "../components/ShoppingList";

const propTypes = {
  name: PropTypes.string.isRequired
}

const defaultProps = {

}

const ShoppingListContainer = ({name}) => {
  const item_list = [
    'Milk',
    'Eggs',
    'Bacon',
    'Soda'
  ]

  return (
    <ShoppingList name={name} list={item_list} />
  )
}

ShoppingListContainer.propTypes = propTypes;
ShoppingListContainer.defaultProps = defaultProps;

export default ShoppingListContainer;
