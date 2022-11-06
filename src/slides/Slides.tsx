import React, { useState } from "react";
import Section from "./section/Section";
import { slideData } from "./types";
import "./Slides.scss";

import { FlippingPages } from "flipping-pages";
import "flipping-pages/dist/style.css";

const data: slideData[] = [
  {
    img: {
      url: "https://cdn.fishki.net/upload/post/2021/01/03/3534103/tn/ad144b8c38d15f16c55065859de3745b.png.jpeg",
      alt: "Scythians",
    },
    title: "Title 1",
    description: "Description",
  },
  {
    img: {
      url: "https://cdn.fishki.net/upload/post/2021/01/03/3534103/tn/ad144b8c38d15f16c55065859de3745b.png.jpeg",
      alt: "Scythians",
    },
    title: "Title 2",
    description: "Description",
  },
  {
    img: {
      url: "https://cdn.fishki.net/upload/post/2021/01/03/3534103/tn/ad144b8c38d15f16c55065859de3745b.png.jpeg",
      alt: "Scythians",
    },
    title: "Title 3",
    description: "Description",
  },
  {
    img: {
      url: "https://cdn.fishki.net/upload/post/2021/01/03/3534103/tn/ad144b8c38d15f16c55065859de3745b.png.jpeg",
      alt: "Scythians",
    },
    title: "Title 4",
    description: "Description",
  },
  {
    img: {
      url: "https://cdn.fishki.net/upload/post/2021/01/03/3534103/tn/ad144b8c38d15f16c55065859de3745b.png.jpeg",
      alt: "Scythians",
    },
    title: "Title 5",
    description: "Description",
  },
];

const Slider = () => {
  const [selected, setSelected] = useState(0);

  const back = () => {
    setSelected((selected) => Math.max(selected - 1, 0));
  };

  const next = () => {
    setSelected((selected) => Math.min(selected + 1, data.length - 1));
  };

  return (
    <div className="wrapper-pages">

      <button onClick={back}><img src="../../imgs/arrow.svg"/></button>

      <div
        className="container-pages"
        onWheel={(e) => {
          e.deltaY > 0 ? next() : back();
        }}
      >

        <FlippingPages
          direction="right-to-left"
          animationDuration={800}
          onSwipeEnd={setSelected}
          selected={selected}
        >
          {data.map((content: slideData, index) => (
                  <Section key={index} data={content} />
          ))}
        </FlippingPages>

      </div>

      <button onClick={next}>Next</button>
    </div>
  );
};

export default Slider;
