import React from 'react';
import './InventoryItem.css';
import productPlaceholder from '../assets/product-placeholder.svg';

const InventoryItem = ({ name, imageUrl }) => {
  const imageSrc = imageUrl || productPlaceholder;

  return (
    <div className="inventory-item-card">
      <div className="item-image-container">
        <img src={imageSrc} alt={name} className="item-image" />
      </div>
      <div className="item-name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default InventoryItem;
