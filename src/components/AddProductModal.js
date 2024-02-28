// components/AddProductModal.js
import React, { useState } from 'react';

const AddProductModal = ({ closeModal, addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price, image });
    closeModal();
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default AddProductModal;
