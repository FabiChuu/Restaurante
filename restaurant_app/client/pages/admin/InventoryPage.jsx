import React, { useState } from 'react';
import Header from '../../components/Header';
import InventoryItem from '../../components/InventoryItem';
import './InventoryPage.css';

// Mock data for demonstration
const mockInventory = [
  { id: 1, name: 'Tomatoes', imageUrl: '' },
  { id: 2, name: 'Lettuce', imageUrl: '' },
  { id: 3, name: 'Onions', imageUrl: '' },
  { id: 4, name: 'Beef Patties', imageUrl: '' },
  { id: 5, name: 'Buns', imageUrl: '' },
  { id: 6, name: 'Cheese', imageUrl: '' },
  { id: 7, name: 'Potatoes', imageUrl: '' },
  { id: 8, name: 'Soda Cans', imageUrl: '' },
];

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInventory = mockInventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-page">
      <Header />
      <main className="inventory-container">
        <h1>Inventory</h1>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search for items..."
            className="search-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="inventory-grid">
          {filteredInventory.map(item => (
            <InventoryItem key={item.id} name={item.name} imageUrl={item.imageUrl} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default InventoryPage;
