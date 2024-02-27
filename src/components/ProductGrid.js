import React from 'react';

const ProductGrid = ({ products }) => {
  return (
    <div>
      {Array.isArray(products) ? (
        products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductGrid;
