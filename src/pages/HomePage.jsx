import React, { useContext } from "react";

import BookCard from "../components/BookCard";
import "../App.css";
import LibraryContex from "../context/Context";

const HomePage = () => {
  const { searchItem, setSearchItem, books, searchBook } =
    useContext(LibraryContex);

  return (
    <div className="home-page">
      <div>
        <header className="header">
          <h1>
            BookClup<i className="bi bi-book"></i>
          </h1>
          <div className="Search">
            <input
              placeholder="Enter book name.."
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button onClick={() => searchBook(searchItem)}>
              <i class="bi bi-search"></i>
            </button>
          </div>
        </header>
        {books.length > 0 ? (
          <div className="book-container">
            {searchBook(books).map((book) => (
              <div>
                <BookCard searchBook={searchBook} book={book} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="not-found">
              <h3>
                Book is not found. <i class="bi bi-emoji-frown"></i>
              </h3>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
