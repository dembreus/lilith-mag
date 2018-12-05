import React from "react";
import Columns from "../layouts/columns";
import ImgCard from "../examples/imageCard";
import horse from "../../images/red-horse.png";
import nancy from "../../images/nancy-glazier.png";
import lion from "../../images/lion-and-lamb.png";
import savusavu from "../../images/savusavu.png";
import grandfather from "../../images/grandfather.png";

const posts = () => {
  return (
    <Columns
      content={
        <React.Fragment>
          <ImgCard
            img={lion}
            title="Nancy Glazier"
            body="Magazine project profile"
            id={1}
          />
          <ImgCard
            img={horse}
            title="Nancy Glazier"
            body="Magazine project profile"
            id={2}
          />
          <ImgCard
            img={nancy}
            title="Nancy Glazier"
            body="Magazine project profile"
            id={3}
          />
          <ImgCard
            img={savusavu}
            title="Nancy Glazier"
            body="Magazine project profile"
            id={4}
          />
          <ImgCard
            img={grandfather}
            title="Nancy Glazier"
            body="Magazine project profile"
            id={5}
          />
        </React.Fragment>
      }
    />

    //   //<Main />
    //   //subscribe
    //   <Subscribe />
  );
};

export default posts;
