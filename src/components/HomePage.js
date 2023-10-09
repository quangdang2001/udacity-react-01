import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const HomePage = ({ setChelfChanged, books }) => {
  const currentlyReading = books.filter(
    (item) => item.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((item) => item.shelf === "wantToRead");
  const read = books.filter((item) => item.shelf === "read");

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              bookShelfTitle={"Currently Reading"}
              books={currentlyReading}
              setChelfChanged={setChelfChanged}
            />
            <BookShelf
              bookShelfTitle={"Want to Read"}
              books={wantToRead}
              setChelfChanged={setChelfChanged}
            />
            <BookShelf
              bookShelfTitle={"Read"}
              books={read}
              setChelfChanged={setChelfChanged}
            />
          </div>
        </div>
        <Link to="/search" className="open-search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
