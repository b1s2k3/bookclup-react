import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import LibraryContex from "./context/Context";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import Nav from "./components/Nav";

const API_URL = "http://localhost:3000/books";

const App = () => {
  const [searchItem, setSearchItem] = useState("");
  
  const [searchParam] = useState(["title", "author"]);

  const [books, setBooks] = useState([]);

  const [libItems, setLibItem] = useState([]);

  const fetchBooks = () => {
    axios.get(API_URL).then((response) => setBooks(response.data));
  }

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToLibrary = (id) => {
    if (libItems.find((libItem) => libItem === books[id])) {
      alert("Book is already added.");
      setLibItem(libItems);
    } else {
      const libList = [...libItems, books[id]];
      return setLibItem(libList);
    }
  };

  // function searchBook(){
  //     return books.filter(
  //     (book) => book.title.toLowerCase().indexOf(searchItem.toLowerCase()) > -1
  //   );

  // };

  function searchBook(books) {
    return books.filter((book) => {
        return searchParam.some((newItem) => {
            return (
                book[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(searchItem.toLowerCase()) > -1
            );
        });
    });
}

  return (
    <div className="App">
      <BrowserRouter>
        <LibraryContex.Provider
          value={{
            libItems,
            searchBook,
            searchItem,
            setSearchItem,
            books,
            setBooks,
            setLibItem,
            addToLibrary,
          }}
        >
          <Nav />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
          </Routes>
        </LibraryContex.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
