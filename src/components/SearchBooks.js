import React, { useState } from "react";
import { search } from "../BooksAPI";
import Book from "./Book";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBooks = ({ setChelfChanged, currentBooks }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(async () => {
    let books = query === "" ? [] : await search(query, 20);

    if (books.error) {
      setSearchBooks([]);
      return;
    }
    let result = books.map((book) => {
      let duplicatedBook = currentBooks.find(
        (currentBook) => currentBook.id === book.id
      );
      if (duplicatedBook) {
        return {
          ...book,
          shelf: duplicatedBook.shelf,
        };
      }

      return {
        ...book,
        shelf: "none",
      };
    });
    console.log(result);
    setSearchBooks(result);
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          <a>Close</a>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={(e) => setQuery(e.target.value.trim())}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks?.map((item) => (
            <li key={item.id}>
              <Book
                title={item.title}
                authors={item.authors}
                bookId={item.id}
                shelf={item.shelf}
                backgroundImage={item.imageLinks.thumbnail}
                setChelfChanged={setChelfChanged}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
