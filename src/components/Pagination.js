import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <div className="pagination justify-content-center">
      <button className="btn btn-primary" onClick={handleFirstPage}>First</button>
      <button className="btn btn-primary" onClick={handlePreviousPage}>Previous</button>
      <p className="mx-3">Page {currentPage} of {totalPages}</p>
      <button className="btn btn-primary" onClick={handleNextPage}>Next</button>
      <button className="btn btn-primary" onClick={handleLastPage}>Last</button>
    </div>
  );
};

export default Pagination;
