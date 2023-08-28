import React from "react";
import { Link } from "react-router-dom";

const Land = () => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="display-2 fw-light">Rick & Morty</h1>
          <p className="lead text-body-secondary fs-3">
            "Welcome to the ultimate "Rick & Morty" character showcase! Get
            ready to dive into the fascinating world of your favorite TV show
            characters. Discover their unique appearances, quirky names, curious
            species, intriguing origins, and so much more! Join us on this
            cosmic journey as we unveil the quirky and captivating personalities
            that make the "Rick & Morty" universe truly unforgettable!"
          </p>
          <p>
            <Link to={"/main"} className="btn btn-warning my-2">
              Take me there
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Land;
