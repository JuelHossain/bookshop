const BookSelf = ({ books }) => {
  console.log(books);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-200 relative p-4">
      {books?.map((book) => (
        <img src={book} alt="books" className="w-30 h-40" />
      ))}
      <img
        src="https://w0.peakpx.com/wallpaper/248/213/HD-wallpaper-abstract-texture-wood.jpg"
        alt="wood "
        className="w-full h-6 absolute bottom-0"
      />
    </div>
  );
};

export default BookSelf;
