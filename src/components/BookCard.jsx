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
      <button onClick={() => addToLibrary(id)}>+</button>
      
    </div>
  );
};


// Without props destruction

// const BookCard = (props) => {
//   return (
//     <div className="book-item">
//       <h4>
//         <b>{props.book.title}</b>
//       </h4>
//       <h5>Written by {props.book.author}</h5>
//       <h6>{props.book.year}</h6>
//       <button className="add-book">+</button>
//     </div>
//   );
// };

export default BookCard;
