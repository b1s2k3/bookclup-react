import React from "react";

const LibraryItem = ({libItem}) => {
  return (
    <div className="library">
      <table className="library">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Page</th>
        </tr>
        <tr>
          <td>{libItem.title}</td>
          <td>{libItem.author}</td>
          <td>{libItem.year}</td>
          <td>{libItem.pages}</td>
        </tr>
      </table>
    </div>
  );
};

export default LibraryItem;
