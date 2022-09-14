import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1>Movie Recommender</h1>
      <ul className="navbar-ul">
        <li className="navbar-item">
          <a
            className="navbar-link active"
            href="https://github.com/shanolhere"
          >
            Github link
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
