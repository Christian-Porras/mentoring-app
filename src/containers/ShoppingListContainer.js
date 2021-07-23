import React from 'react';
import PropTypes from 'prop-types';
import ShoppingList from "../components/ShoppingList";

const propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    perishable: PropTypes.bool.isRequired
  })),
}

const defaultProps = {

}

const ShoppingListContainer = ({name, items}) => {
  return (
    <ShoppingList name={name} list={items}/>
  )
}

ShoppingListContainer.propTypes = propTypes;
ShoppingListContainer.defaultProps = defaultProps;

export default ShoppingListContainer;
