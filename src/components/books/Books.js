import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { books } from "../../utils/books";
import BookSelf from "./BookSelf";

const Books = () => {
  const [booksPerSelf, setBooksPerSelf] = useState(4);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width < 640) {
      setBooksPerSelf(1);
    } else if (width < 768) {
      setBooksPerSelf(2);
    } else if (width < 1024) {
      setBooksPerSelf(3);
    } else {
      setBooksPerSelf(4);
    }
  }, [width]);
  const limitedBooks = books.slice(books.length - 8);
  let selfs = [];
  for (let i = 1; i <= Math.ceil(limitedBooks?.length / 4); i++) {
    const indexOfLastBook = i * booksPerSelf;
    console.log(indexOfLastBook);
    const indexOfFirstBook = indexOfLastBook - booksPerSelf;
    const currentBooks = limitedBooks.slice(indexOfFirstBook, indexOfLastBook);
    selfs.push(<BookSelf key={i} books={currentBooks} />);
  }
  return <div className="flex flex-col gap-10 m-10 xl:px-20">{selfs}</div>;
};

export default Books;
