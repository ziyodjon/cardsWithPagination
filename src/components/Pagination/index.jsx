import React from "react";
import "./index.scss";
import { useState } from "react";
import clsx from "clsx";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [pageLimit, setPageLimit] = useState(5); // Количество отображаемых страниц

  const getPages = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
    let endPage = Math.min(totalPages, startPage + pageLimit - 1);

    if (endPage - startPage + 1 < pageLimit) {
      startPage = Math.max(1, endPage - pageLimit + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-previous-btn"
      >
        Предыдущий
      </button>

      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            page === currentPage ? "active" : "",
            "pagination-number"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-next-btn"
      >
        Следующий
      </button>
    </div>
  );
};

export default Pagination;
