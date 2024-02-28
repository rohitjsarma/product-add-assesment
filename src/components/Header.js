import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalProducts = useSelector((state) => state.totalProducts);

  return (
    <header>
      <h1>Product List</h1>
      <p>Total Products: {totalProducts}</p>
      <button>Add Product</button>
    </header>
  );
};

export default Header;
