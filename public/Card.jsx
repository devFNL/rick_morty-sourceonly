import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ character }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          src={character.image}
          alt="image"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        ></img>
        <div className="card-body">
          <h2 className="fs-3 text">{character.name}</h2>
          {/* <p className="card-text">
            Specie: {character.species} <br />
          </p> */}
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-warning text-black fs-5"
              >
                <Link
                  to={`/details/${character.id}`}
                  className="text-black link-offset-2 link-underline link-underline-opacity-0"
                >
                  Details
                </Link>
              </button>
            </div>
            <small className="text-body-secondary fs-5">{character.id}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
