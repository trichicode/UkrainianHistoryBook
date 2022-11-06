import { FC } from "react";
import { slideData } from "../types";
import "./Section.scss";

const Section: FC<{ data: slideData }> = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__img">
        <img src={data.img.url} alt={data.img.alt} />
      </div>

      <div className="wrapper__content">
        <div className="content__title">{data.title}</div>
        <div className="content__description">{data.description}</div>
      </div>
    </div>
  );
};

export default Section;
