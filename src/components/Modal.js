import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    console.log('Submitting product:', { name, price, image });
    onSubmit({ name, price, image });
    onClose();
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Price:</label>
        <input type="text" name="price" />
        <label>Image URL:</label>
        <input type="text" name="image" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Modal;
