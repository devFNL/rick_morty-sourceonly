import React from "react";
import { useParams, Link } from "react-router-dom";
import { getCharById } from "../service/FetchService";

export const Details = () => {
  const [character, setCharacter] = React.useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCharById(id);
        setCharacter(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const detailCard = {
    width: "80%",
    margin: "auto",
    background: "white",
  };

  return (
    <div className="card mb-3" style={{ background: "gainsboro" }}>
      <div className="row g-0 mt-4 mb-4" style={detailCard}>
        <div className="col-md-3">
          <img
            src={character.image}
            className="img-fluid rounded-start imgDetalle"
            alt="character img"
          />
        </div>
        <div className="col-md-8 detallecharacter">
          <div className="card-body">
            <h4 className="card-title fs-3">{character.name}</h4>
            <p className="card-text mb-1 fs-4 border-bottom">
              <small className=""> Specie: {character.species}</small>
            </p>
            <p className="card-text mb-1 fs-5">
              <small className=""> Status: {character.status}</small>
            </p>
            <p className="card-text mb-1 fs-5">
              <small className=""> Gender: {character.gender}</small>
            </p>
            <p className="card-text mb-1 fs-5">
              <small className="">
                {" "}
                Origin: {character.origin ? character.origin.name : "Unknown"}
              </small>
            </p>
            <p className="card-text mb-1 fs-5">
              <small className="">
                {" "}
                Location:{" "}
                {character.location ? character.location.name : "Unknown"}
              </small>
            </p>
          </div>

          <div className="btn-group" style={{ marginLeft: "15px" }}>
            <button
              type="button"
              className="btn btn-sm btn-outline-warning text-black fs-5"
            >
              <Link to={"/main"} className="nav-link px-2 text-black">
                Back
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
