import React from "react";

const Nested = ({ nested, nestedOpen }) => {
  return (
    nested.length > 0 &&
    nestedOpen && (
      <div className="flex flex-col gap-2 ml-3">
        {nested.map((nest) => (
          <p>{nest}</p>
        ))}
      </div>
    )
  );
};

export default Nested;
