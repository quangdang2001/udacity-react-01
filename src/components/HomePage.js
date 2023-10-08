import React from "react";
import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading?.map((item) => (
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToRead?.map((item) => (
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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read?.map((item) => (
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
          </div>
        </div>
        <Link to="/search" className="open-search">
          <a>Add a book</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
