import React from "react";

const Pagination = () => {
  return (
    <div className="flex gap-4 items-center justify-center ">
      <svg
        className="w-6 h-6 bg-gray-200 rounded-md"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      {Object.keys([...Array(6)]).map((number) => (
        <span className={`${number == 0 && "font-bold"}`}>{+number + 1}</span>
      ))}
      <svg
        className="w-6 h-6 bg-gray-200 rounded-md"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Pagination;
