import React from "react";

function Pagination({ currentPage, totalPages, onPrevious, onNext }) {
  return (
    <nav className="pagination" aria-label="Pagination">
      <button className="pagination-button" onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span className="page-indicator">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-button"
        onClick={onNext}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;