import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
interface PaginationButtonsProps {
  page: number;
  handlePageChange: (page: number) => void;
  search?: string;
}
function PaginationButtons({
  page,
  handlePageChange,
  search,
}: PaginationButtonsProps) {
  return (
    <div className="flex mt-4">
      <button
        onClick={() => handlePageChange(page - 1)}
        className={`bg-gray-900 text-white px-4 py-2 rounded-l ${
          (page === 1 || search === "") &&
          "cursor-not-allowed text-gray-400 opacity-50"
        }`}
        disabled={page === 1 || search === ""}
      >
        <FaChevronLeft />
      </button>
      <span className="bg-gray-900 text-white px-4 py-2">{page}</span>
      <button
        onClick={() => handlePageChange(page + 1)}
        className={`bg-gray-900 text-white px-4 py-2 rounded-r ${
          search === "" && "cursor-not-allowed text-gray-400 opacity-50"
        }`}
        disabled={search === ""}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default PaginationButtons;
