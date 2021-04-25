import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const AddCartBtn = () => {
  const addToCart = () => {};
  return (
    <button className="add-btn" onClick={addToCart}>
      Añadir
      <FontAwesomeIcon icon={faShoppingCart} size="sm" className="icon-cart" />
    </button>
  );
};

export default AddCartBtn;
