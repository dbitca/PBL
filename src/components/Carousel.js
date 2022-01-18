import React, { useState } from "react";

import Card from "./Card";
import Prev from "../image/left.svg";
import Next from "../image/right.svg";
import "../style/Carousel.css";
import { useParams } from "react-router-dom";

const Carousel = ({ itms }) => {
  const { id } = useParams();
  console.log("id", id);
  const items = [
    {
      name: "Covid Vaccine",
      description: "See more",
      type: "health",
    },
  ];
  const filtredItems = id ? items.filter((e) => e.type == id) : items;
  const [index, setIndex] = useState(0);
  const prevAction = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextAction = () => {
    if (index < items.length - 3) setIndex(index + 1);
  };

  return (
    <div className="carousel-body">
      <div className="prev-card" onClick={prevAction}>
        <img src={Prev} alt="prev" />
      </div>
      {filtredItems.map((e, i) => {
        if (i >= index && i <= index + 2) {
          return <Card key={i} {...e} />;
        }
        return null;
      })}
      <Card isNewCard={true} name={"New Document"} description="Send a request" />
      <div className="next-card" onClick={nextAction}>
        <img src={Next} alt="next" />
      </div>
    </div>
  );
};

export default Carousel;
