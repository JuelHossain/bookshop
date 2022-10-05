import React from "react";

const Header = () => {
  const nav = ["home", "books", "about", "rules", "contact"];
  return (
    <div className="justify-end flex  gap-10 py-6 px-10">
      {nav.map((n) => (
        <p className={`capitalize ${n === "home" && "font-bold"}`}>{n}</p>
      ))}
    </div>
  );
};

export default Header;
