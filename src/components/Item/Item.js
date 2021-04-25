import React from 'react';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import DetailBtn from '../DetailBtn/DetailBtn';
import Image from '../Image/Image';

const Item = ({ item }) => {
  return (
    <div className="card">
      <Image src={item.image} />
      <div className="card-body">
        <span className="card-title">{item.title}</span>
      </div>
      <div className="card-actions">
        <span className="card-price">${item.price}</span>
        <DetailBtn id={item.id} />
        <AddCartBtn id={item.id} />
      </div>
    </div>
  );
};

export default Item;
