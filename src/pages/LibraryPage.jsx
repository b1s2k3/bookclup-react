import React, { useContext } from "react";
import LibraryContex from "../context/Context";

const LibraryPage = () => {
  const { libItems } = useContext(LibraryContex);

  return (
    <div className="library-page">

      <table className="library">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Page</th>
        </tr>

        {libItems.map((libItem) => (
          <tr>
            <td>{libItem.title}</td>
            <td>{libItem.author}</td>
            <td>{libItem.year}</td>
            <td>{libItem.pages}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LibraryPage;



