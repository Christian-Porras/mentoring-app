import React from 'react';
import ShoppingList from "../components/ShoppingList";

const ShoppingListContainer = () => {
  const item_list = [
    'Milk',
    'Eggs',
    'Bacon',
    'Soda'
  ]

  return (
    <ShoppingList name='Chris' list={item_list} />
  )
}

export default ShoppingListContainer;
