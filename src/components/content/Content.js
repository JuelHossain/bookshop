import React from "react";
import Books from "../books/Books";
import Pagination from "../books/Pagination";
import Header from "../header/Header";
import Title from "./Title";

const Content = () => {
  return (
    <div className="flex-1 overflow-auto relative">
      <Header />
      <Title />
      <Books />
      <Pagination />
    </div>
  );
};

export default Content;
