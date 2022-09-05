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


// import React, { useContext } from "react";
// import { useState } from "react";
// import LibraryItem from "../components/LibraryItems";
// import LibraryContex from "../context/Context";

// const LibraryPage = () => {
//   const { libItems, setLibItem } = useContext(LibraryContex);
//   const [searchLib, setSearchLib] = useState("");

//   const searchLibBook = () => {
//     const search = libItems.filter(
//       (libItem) => libItem.title.toLowerCase() === searchLib.toLowerCase()
//     );
//     setLibItem(search);
//   };
//   return (
//     <div className="library-page">
//       <div className="lib-search">
//       <input
//               placeholder="Enter book name.."
//               value={searchLib}
//               onChange={(e) => setSearchLib(e.target.value)}
//             />
//             <button onClick={() => searchLibBook(searchLib)}>search</button>
//       </div>
//       <div>
//       {libItems.map(libItem => (
//         <LibraryItem libItem={libItem} searchLibBook={searchLibBook}/>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default LibraryPage;
