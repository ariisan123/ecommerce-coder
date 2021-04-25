import React, { useEffect, useState } from 'react';
import data from '../data';
import Item from '../Item/Item';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setItems([...data]);
    }, 2000);
  }, []);
  console.log(items);
  return (
    <div className="item-list-container">
      {items.length === 0 && <h1>Cargando...</h1>}
      {items && items.map((item) => <Item item={item} key={item.id} />)}
    </div>
  );
};

export default ItemListContainer;
