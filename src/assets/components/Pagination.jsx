// src/components/Pagination.js
import React from 'react';
import './Pagination.css';

const Pagination = ({ page, setPage, hasNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage((prev) => (hasNextPage ? prev + 1 : prev))} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
