import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img
              src={`${import.meta.env.BASE_URL}media/noback.png`}
              className="rounded"
              width="48"
              height="48"
              role="img"
              aria-label="Bootstrap"
            ></img>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fs-4">
            <li>
              <Link to={"/"} className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/main"} className="nav-link px-2 text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link to={"/form"} className="nav-link px-2 text-white">
                Register
              </Link>
            </li>
          </ul>

          {/* <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Search
            </button>
          </div> */}
          <div>▼</div>
        </div>
      </div>
    </header>
  );
};
