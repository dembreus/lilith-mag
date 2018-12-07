import React from "react";
import Columns from "../layouts/columns";
import ImgCard from "../examples/imageCard";
import nancy from "../../images/nancy-glazier.png";
import horse from "../../images/red-horse.png";
import lion from "../../images/lion-and-lamb.png";
import savusavu from "../../images/savusavu.png";
import grandfather from "../../images/grandfather.png";

const posts = () => {
  return (
    <Columns
      content={
        <div className="container">
          <ImgCard
            img={nancy}
            title="Nancy Glazier"
            body="Magazine project profile"
            id={1}
          />
        </div>
      }
    />

    //   //<Main />
    //   //subscribe
    //   <Subscribe />
  );
};

export default posts;
