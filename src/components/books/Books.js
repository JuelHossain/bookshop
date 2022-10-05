import { useState } from "react";
import { books } from "../../utils/books";
import BookSelf from "./BookSelf";

const Books = () => {
  const [booksPerSelf, setBooksPerSelf] = useState(4);
  let selfs = [];
  for (let i = 1; i <= Math.ceil(books?.length / 4); i++) {
    const indexOfLastBook = i * booksPerSelf;
    console.log(indexOfLastBook);
    const indexOfFirstBook = indexOfLastBook - booksPerSelf;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    selfs.push(<BookSelf key={i} books={currentBooks} />);
  }
  return <div className="flex flex-col gap-2">{selfs}</div>;
};

export default Books;
