import React from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({
  title,
  authors,
  backgroundImage,
  bookId,
  shelf,
  setChelfChanged,
}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${backgroundImage}")`,
          }}
        ></div>
        <BookShelfChanger
          setChelfChanged={setChelfChanged}
          bookId={bookId}
          shelf={shelf}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
