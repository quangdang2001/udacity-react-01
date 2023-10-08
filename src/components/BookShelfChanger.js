import React from "react";
import { update } from "../BooksAPI";
const BookShelfChanger = ({ bookId, setChelfChanged, shelf }) => {
  const updateBookStatus = async (e) => {
    await update({ id: bookId }, e.target.value);
    setChelfChanged((prev) => !prev);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={updateBookStatus} value={shelf}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
