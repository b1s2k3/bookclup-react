import React, { useContext } from "react";
import LibraryContex from "../context/Context";

const LibraryPage = () => {
  const { libItems, removeFromLibrary } = useContext(LibraryContex);

  return (
    <div className="library-page">

      <table className="library">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Page</th>
          <th></th>
        </tr>

        {libItems.map((libItem,id) => (
          <tr>
            <td>{libItem.title}</td>
            <td>{libItem.author}</td>
            <td>{libItem.year}</td>
            <td>{libItem.pages}</td>
            <td><button onClick={() => removeFromLibrary(id)}>Remove</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LibraryPage;


