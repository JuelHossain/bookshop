import React from "react";
import Books from "../books/Books";
import Header from "../header/Header";
import Title from "./Title";

const Content = () => {
  return (
    <div className="flex-1 overflow-auto">
      <Header />
      <Title />
      <Books />
    </div>
  );
};

export default Content;
