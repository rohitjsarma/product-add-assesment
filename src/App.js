// App.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Modal from './components/Modal';
import { setProducts, addProduct } from './actions/actions';
import axios from 'axios';

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const products = useSelector((state) => state.products);
  const totalProducts = useSelector((state) => state.products.length); // Calculate totalProducts from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/rohitjsarma/97629c374b806812967e6c53ad877f85/raw/2f43ca54c71c4d7c55963a7c6c748834f75d92e6/gistfile1.txt')
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [dispatch]);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header totalProducts={totalProducts} onAddProduct={() => setIsModalOpen(true)} />
      <ProductGrid products={products} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(product) => handleAddProduct(product)}
      />
    </div>
  );
};

export default App;
