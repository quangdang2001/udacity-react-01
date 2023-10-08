import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI";
import SearchBooks from "./components/SearchBooks";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  const [books, setBooks] = useState([]);
  const [shelfChanged, setChelfChanged] = useState(false);

  useEffect(async () => {
    let bookFetched = await getAll();
    setBooks(bookFetched);
  }, [shelfChanged]);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage setChelfChanged={setChelfChanged} books={books} />}
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              currentBooks={books}
              setChelfChanged={setChelfChanged}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
