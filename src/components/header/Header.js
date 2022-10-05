import React from "react";

const Header = () => {
  const nav = ["home", "books", "about", "rules", "contact"];
  return (
    <div className="flex justify-between md:justify-end items-center  py-6 px-10">
      <svg
        className="w-6 h-6 md:hidden"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <div className="justify-end  gap-10 hidden sm:flex">
        {nav.map((n) => (
          <p className={`capitalize ${n === "home" && "font-bold"}`}>{n}</p>
        ))}
      </div>
      <svg
        className="w-6 h-6 sm:hidden "
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Header;
