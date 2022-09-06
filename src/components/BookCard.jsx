import React, { useContext } from "react";
import LibraryContex from "../context/Context";
 
const BookCard = ({ book: {id, title, author, year }}) => {
   
  const {addToLibrary} = useContext(LibraryContex)

  return (
    <div className="book-item" >
      <h4>
        <b>{title}</b>
      </h4>
      <h5>Written by {author}</h5>
      <h6>{year}</h6>
      <button title="add to library" onClick={() => addToLibrary(id)}><i className="bi bi-plus-circle-fill"></i></button>
      
    </div>
  );
};

export default BookCard;
