import React from "react";
import Book from "./Book";

const BookShelf = ({ bookShelfTitle, books, setChelfChanged }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.map((item) => (
            <li key={item.id}>
              <Book
                title={item.title}
                authors={item.authors}
                bookId={item.id}
                shelf={item.shelf}
                backgroundImage={item?.imageLinks?.thumbnail}
                setChelfChanged={setChelfChanged}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
