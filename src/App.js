import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const productsPerPage = 5;

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    dispatch(fetchProducts(startIndex, endIndex));
  }, [dispatch, currentPage, productsPerPage]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addProduct = (product) => {
    // Implement adding product functionality here
    console.log('Adding product:', product);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container">
      <Header totalProducts={products.length} openModal={openModal} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ProductList products={products} />
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
          <div className="pagination">
            <button className="btn btn-primary" onClick={() => setCurrentPage(1)}>First</button>
            <button className="btn btn-primary" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button className="btn btn-primary" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            <button className="btn btn-primary" onClick={() => setCurrentPage(totalPages)}>Last</button>
          </div>
        </>
      )}
      {isModalOpen && <AddProductModal closeModal={closeModal} addProduct={addProduct} />}
    </div>
  );
};

export default App;
