import React from 'react';
import { useHistory } from 'react-router';

const DetailBtn = ({ id }) => {
  const history = useHistory();
  const toProduct = () => {
    history.push(`/product/${id}`);
  };
  return (
    <button className="detail-btn" onClick={toProduct}>
      Ver más...
    </button>
  );
};

export default DetailBtn;
