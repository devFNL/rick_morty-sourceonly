import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  const name = "Dev.FNL";

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">
          &copy; {year} {name}
        </p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item fs-5">
            <Link to={"/"} className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item fs-5">
            <Link to={"/main"} className="nav-link px-2 text-body-secondary">
              Gallery
            </Link>
          </li>
          <li className="nav-item fs-5">
            <Link to={"/form"} className="nav-link px-2 text-body-secondary">
              Register
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
