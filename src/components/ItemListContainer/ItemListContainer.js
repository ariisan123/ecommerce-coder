import React from 'react';
import data from '../data';
import Item from '../Item/Item';

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      {data.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemListContainer;
