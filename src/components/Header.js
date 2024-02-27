// Header.js
import React from 'react';

const Header = ({ totalProducts, onAddProduct }) => {
  return (
    <div>
      <h1>Total Products: {totalProducts}</h1>
      <button onClick={onAddProduct}>Add Product</button>
    </div>
  );
};

export default Header;
