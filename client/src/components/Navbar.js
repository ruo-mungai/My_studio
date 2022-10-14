import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar({user, setUser}) {

   function handleLogoutClick() {
     fetch("/logout", { method: "DELETE" }).then((r) => {
       if (r.ok) {
         setUser(null);
       }
     });
   }
  return (
    <div
      className="header"
      class="fixed-top d-flex justify-content-center align-items-center header-transparent"
    >
      <nav id="navbar" class="navbar">
        <ul>
          <li></li>
          <button type="button" class="btn btn-secondary" onClick={handleLogoutClick}>
              Logout
            
          </button>
        </ul>
        <NavLink style={{ marginLeft: "10px" }} to="/">
          <button type="button" class="btn btn-secondary">
            <a class="nav-link scrollto" href="#services">
              Home
            </a>
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar