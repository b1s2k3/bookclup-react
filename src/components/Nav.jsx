
import React, { useContext } from "react";
import LibraryContex from "../context/Context";
import { NavLink } from "react-router-dom";

const Nav = () => {

  const{libItems} = useContext(LibraryContex)


    return(
      <nav class="navbar">
        <div class="nav-container">
          <ul class="nav">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/library">Library ({libItems.length})</NavLink>              
            </li>
          </ul>
        </div>
    </nav>
    )
}

export default Nav;


// Apply Link to