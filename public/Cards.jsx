import React from "react";
import { Card } from "./Card";

export const Cards = ({ characters }) => {
  const cardList = characters.map((c) => <Card character={c} key={c.id} />);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardList}
        </div>
      </div>
    </div>
  );
};
