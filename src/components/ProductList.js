import React from 'react';
import LazyLoad from 'react-lazy-load';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <LazyLoad>
            <img
              alt={product.name}
              src={product.image}
              style={{ opacity: 0 }}
              onLoad={(e) => {
                e.target.style.transition = 'opacity 0.5s';
                e.target.style.opacity = 1;
              }}
            />
          </LazyLoad>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
